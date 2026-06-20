const express =
require("express");


const router =
express.Router();



const researchSearchController =
require("../controllers/researchSearchController");




// Search Research

router.get(

    "/search",

    researchSearchController.searchResearch

);



module.exports =
router;