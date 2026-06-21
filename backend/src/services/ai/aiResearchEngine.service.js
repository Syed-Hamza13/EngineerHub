import { getContext } from "./contextService.js";
import { getRelevantDocs } from "./retrievalService.js";
import { buildPrompt } from "./promptBuilder.service.js";
import { generateResponse } from "./llmService.js";

export const runAIResearch = async (query, userId, projectId) => {
  try {
    
    // 1. Get user + project context
    const context = await getContext(userId, projectId);

    // 2. Get relevant documents from vector DB (Module 3)
    const docs = await getRelevantDocs(query);

    // 3. Build AI prompt (RAG)
    const prompt = buildPrompt(query, context, docs);

    // 4. Call LLM (HuggingFace / API)
    const result = await generateResponse(prompt);

    // 5. Final structured output
    return {
      success: true,
      query,
      contextUsed: context,
      sources: docs,
      answer: result
    };

  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};