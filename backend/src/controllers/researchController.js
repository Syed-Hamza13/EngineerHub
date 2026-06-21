const researchService =
require("../services/researchService");


const validateResearch =
require("../validators/researchValidator");


const {
    generateResearch
} = require("../services/nexchatAIService");


const {
    buildResearchContext
} = require("../services/contextBuilderService");

const {
    formatResearch
}
=
require("../services/researchFormatterService");

const {
    generateEmbedding
}
=
require("../services/embeddingService");

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






// Generate Research using AI

exports.generateResearchAI =
async(req,res)=>{

    try{
        // Validate request body exists
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: "Request body is required"
            });
        }

        const {
            query,
            userId,
            projectId
        } = req.body;

        // Validate required fields
        if(!query || typeof query !== 'string' || query.trim() === ''){
            return res.status(400).json({
                success:false,
                message:"Query is required and must be a non-empty string"
            });
        }

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"userId is required"
            });
        }

        if(!projectId){
            return res.status(400).json({
                success:false,
                message:"projectId is required"
            });
        }

        // Build Context from Modules

        const context =
        await buildResearchContext(
            userId,
            projectId
        );

        // Send Query + Context to AI

        const result =
        await generateResearch(
            query,
            context
        );

        const formattedResult =
formatResearch(result);

const embeddingText =
JSON.stringify(formattedResult);


const vector =
await generateEmbedding(
    embeddingText
);


        // Save AI Generated Research

       const savedResearch =
await researchService.createResearch({

    projectId,

    query,

    generatedContent:formattedResult,

    embedding:vector,

    aiGenerated:true

});



        return res.status(200).json({

            success:true,

            message:
            "AI Research generated successfully",

            data:savedResearch

        });



    }
    catch(error){

        console.error(
            "AI Research Error:",
            error.message,
            error.stack
        );

        res.status(error.status || 500).json({

            success:false,

            message: error.message || "Failed to generate research"

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