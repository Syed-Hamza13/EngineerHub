import axios from "axios";

export const getRelevantDocs = async (query) => {
  try {

    // FastAPI call (Module 4A)
    const response = await axios.get("http://localhost:8000/api/search", {
      params: { query }
    });

    return response.data.results;

  } catch (error) {
    console.log("Retrieval Error:", error.message);
    return [];
  }
};