import axios from "axios";

export const generateResponse = async (prompt) => {
  try {

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct",
      {
        inputs: prompt
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`
        }
      }
    );

    return response.data[0]?.generated_text || "No response";

  } catch (error) {
    return "LLM Error: " + error.message;
  }
};