const projectService = require("../services/projectService");


// Create Project
const createProject = async(req,res)=>{

    try{

        const project =
        await projectService.createProject(req.body);


        res.status(201).json({
            success:true,
            message:"Project created successfully",
            data:project
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// Get Projects
const getProjects = async(req,res)=>{

    try{

        const projects =
        await projectService.getProjects();


        res.json({
            success:true,
            data:projects
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// Get Single Project

const getProjectById = async(req,res)=>{

    try{

        const project =
        await projectService.getProjectById(
            req.params.id
        );


        res.json({
            success:true,
            data:project
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// Update Project

const updateProject = async(req,res)=>{

    try{

        const project =
        await projectService.updateProject(
            req.params.id,
            req.body
        );


        res.json({
            success:true,
            data:project
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// Delete Project

const deleteProject = async(req,res)=>{

    try{

        await projectService.deleteProject(
            req.params.id
        );


        res.json({
            success:true,
            message:"Project deleted"
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



module.exports = {

    createProject,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};