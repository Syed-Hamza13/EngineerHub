export const buildPrompt = (query, context, docs) => {

  const contextText = `
USER PROFILE:
Name: ${context.user.name}
Skills: ${context.user.skills?.join(", ")}

PROJECT:
${context.project.title} - ${context.project.domain}

RELEVANT DATA:
${docs.map(d => d.text).join("\n")}
`;

  return `
You are an AI Research Engine.

Use the following context and data to answer:

${contextText}

QUESTION:
${query}

FORMAT:
- Clear explanation
- Structured points
- Final conclusion
`;
};