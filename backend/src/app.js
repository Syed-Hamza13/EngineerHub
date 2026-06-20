const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoues");
const projectRoutes = require("./routes/projectRoutes");
const memberRoutes =
require("./routes/memberRoutes");
const researchRoutes =
require("./routes/researchRoutes");
const versionRoutes =
require("./routes/versionRoutes");
const metadataRoutes =
require("./routes/metadataRoutes");
const embeddingRoutes =
require("./routes/embeddingRoutes");
const researchSearchRoutes =
require("./routes/researchSearchRoutes");



const app = express();


app.use(cors());

app.use(express.json());


// Routes

const profileRoutes = require("./routes/profileRoutes");



app.use(
    "/api/profile",
    profileRoutes
);

app.use(
    "/api/auth",
    authRoutes
);

app.use(
"/api/projects",
projectRoutes
);

app.use(
"/api",
memberRoutes
);

app.use(
    "/api/research",
    researchRoutes
);

app.use(
"/api/research",
versionRoutes
);

app.use(
"/api/research",
metadataRoutes
);

app.use(
"/api/research",
embeddingRoutes
);

app.use(
"/api/research",
researchSearchRoutes
);

app.get("/",(req,res)=>{

    res.json({

        message:"Module 1 Backend Running"

    });

});




module.exports = app;