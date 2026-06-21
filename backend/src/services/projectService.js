const Project = require("../models/Project");
const ProjectMember = require("../models/ProjectMember");


// Create Project
const createProject = async (projectData) => {

    const {
        ownerId,
        name,
        description,
        domain,
        tags
    } = projectData;


    // Create Project
    const project = await Project.create({
        ownerId,
        name,
        description,
        domain,
        tags
    });


    // Add Owner as Member
    await ProjectMember.create({

    projectId:project._id,

    userId:ownerId,

    role:"Leader",

    permissions:[
        "CREATE_PROJECT",
        "DELETE_PROJECT",
        "MANAGE_MEMBER",
        "EDIT_PROJECT"
    ]

});

    return project;
};



// Get All Projects
const getProjects = async () => {

    return await Project.find();

};



// Get Single Project
const getProjectById = async(projectId)=>{

    return await Project.findById(projectId)
    .populate(
        "ownerId",
        "skills technologies interests"
    );

};


// Update Project
const updateProject = async (
    projectId,
    updateData
)=>{

    return await Project.findByIdAndUpdate(
        projectId,
        updateData,
        {
            new:true
        }
    );

};



// Delete Project
const deleteProject = async(projectId)=>{

    await ProjectMember.deleteMany({
        projectId
    });


    return await Project.findByIdAndDelete(
        projectId
    );

};


module.exports = {

    createProject,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};