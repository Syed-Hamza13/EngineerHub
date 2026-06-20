import { aiResearchEngine } from "../services/aiResearchEngine.service.js";

export const generateResearch = async (req, res) => {
  try {
    const { userId, projectId, query } = req.body;

    if (!userId || !projectId || !query) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const result = await aiResearchEngine({
      userId,
      projectId,
      query
    });

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};