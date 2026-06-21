const Profile =
require("../models/Profile");


const Project =
require("../models/Project");


const Research =
require("../models/ResearchBlock");



exports.buildResearchContext =
async(
    userId,
    projectId
)=>{

    try{


        const profile =
        await Profile.findById(userId);



        const project =
        await Project.findById(projectId);



        const research =
        await Research.find({
            projectId
        })
        .limit(5);



        return {

            skills:
            profile?.skills || [],


            experience:
            profile?.experience || "",



            project:{

                name:
                project?.name || "",


                description:
                project?.description || "",


                domain:
                project?.domain || ""

            },


            previousResearch:
            research || []

        };


    }
    catch(error){


        console.log(
            "Context Builder Error:",
            error.message
        );


        return {

            skills:[],

            experience:"",

            project:{},

            previousResearch:[]

        };

    }

};