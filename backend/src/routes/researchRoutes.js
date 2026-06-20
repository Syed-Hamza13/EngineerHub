const express = require("express");

const router = express.Router();


const researchController =
require("../controllers/researchController");

const checkProjectAccess =
require("../middleware/projectAccessMiddleware");



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