const express = require("express");

const router = express.Router();


const versionController =
require("../controllers/versionController");




// Create Research Version

router.post(
"/:id/version",
versionController.createVersion
);



// Get Research Versions

router.get(
"/:id/versions",
versionController.getVersions
);



// Get Single Version

router.get(
"/version/:versionId",
versionController.getSingleVersion
);



module.exports = router;