const express = require("express");

const router = express.Router();

const {
    createTestProfile,
    createTestEmbedding
}
=
require("../controllers/testController");


router.post(
    "/profile",
    createTestProfile
);


router.post(
    "/embedding",
    createTestEmbedding
);


module.exports = router;