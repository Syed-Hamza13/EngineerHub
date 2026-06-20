const express =
require("express");


const router =
express.Router();



const metadataController =
require("../controllers/metadataController");



// Generate Research Metadata

router.post(
"/:id/metadata",
metadataController.generateMetadata
);



module.exports = router;