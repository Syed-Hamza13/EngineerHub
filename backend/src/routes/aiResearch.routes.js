import express from "express";
import { generateResearch } from "../controllers/aiResearchController.js";

const router = express.Router();

router.post("/research", generateResearch);

export default router;