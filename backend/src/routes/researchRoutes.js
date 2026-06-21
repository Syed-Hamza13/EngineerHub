const express = require("express");

const router = express.Router();


const researchController =
require("../controllers/researchController");

const checkProjectAccess =
require("../middleware/projectAccessMiddleware");



// ================================
// Generate AI Research
// ================================

router.get(
    "/generate",
    (req, res) => {
        return res.status(200).json({
            success: false,
            message: "Use POST /api/research/generate with JSON body { query: '...', userId: '...', projectId: '...' }"
        });
    }
);

router.post(
    "/generate",
    (req, res, next) => {
        console.log('📥 Incoming POST /generate request:');
        console.log('  Headers:', {
            'content-type': req.headers['content-type'],
            'content-length': req.headers['content-length']
        });
        console.log('  Body:', req.body);
        next();
    },
    researchController.generateResearchAI
);

// ================================
// Existing Routes
// ================================


// Create Research
router.post(
    "/",
    checkProjectAccess,
    researchController.createResearch
);


// Get project research
router.get(
    "/project/:projectId",
    researchController.getProjectResearch
);


// Get single research
router.get(
    "/:id",
    researchController.getResearchById
);


// Update research
router.put(
    "/:id",
    researchController.updateResearch
);


// Delete research
router.delete(
    "/:id",
    researchController.deleteResearch
);



module.exports = router;