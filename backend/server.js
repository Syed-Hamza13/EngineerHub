require("dotenv").config();

const Project = require("./src/models/Project");
const ProjectMember = require("./src/models/ProjectMember");
const ProjectSetting = require("./src/models/ProjectSetting");
const app = require("./src/app");

const connectDB = require("./src/config/db");


const PORT = process.env.PORT || 5000;


// Database Connection
connectDB();

console.log("Project Models Loaded");


app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});