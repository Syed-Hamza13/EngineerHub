const researchService =
require("../services/researchService");


const validateResearch =
require("../validators/researchValidator");



// Create Research

exports.createResearch = async(req,res)=>{

    try{

        const validation =
        validateResearch(req.body);


        if(!validation.valid)
        {
            return res.status(400).json({

                success:false,

                errors:validation.errors

            });
        }


        const research =
        await researchService.createResearch(
            req.body
        );


        res.status(201).json({

            success:true,

            message:
            "Research created successfully",

            data:research

        });


    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// Get Research By Project

exports.getProjectResearch =
async(req,res)=>{


    try{


        const {
            projectId
        } = req.params;



        const research =
        await researchService
        .getProjectResearch(projectId);



        res.status(200).json({

            success:true,

            data:research

        });



    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};






// Get Single Research

exports.getResearchById =
async(req,res)=>{


    try{


        const research =
        await researchService
        .getResearchById(
            req.params.id
        );



        if(!research)
        {

            return res.status(404).json({

                success:false,

                message:
                "Research not found"

            });

        }



        res.status(200).json({

            success:true,

            data:research

        });



    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};






// Update Research

exports.updateResearch =
async(req,res)=>{


    try{


        const research =
        await researchService
        .updateResearch(

            req.params.id,

            req.body

        );



        res.status(200).json({

            success:true,

            message:
            "Research updated",

            data:research

        });


    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};







// Delete Research

exports.deleteResearch =
async(req,res)=>{


    try{


        await researchService
        .deleteResearch(
            req.params.id
        );



        res.status(200).json({

            success:true,

            message:
            "Research deleted"

        });


    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};