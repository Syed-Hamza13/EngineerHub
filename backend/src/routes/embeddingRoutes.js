const express =
require("express");


const router =
express.Router();



const controller =
require("../controllers/embeddingController");



router.post(

"/:id/embedding",

controller.generateEmbedding

);



module.exports = router;