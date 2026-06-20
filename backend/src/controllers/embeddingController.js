const embeddingService =
require("../services/aiResearchEmbeddingService");



exports.generateEmbedding =
async(req,res)=>{


    try{


        const researchId =
        req.params.id;



        const result =
        await embeddingService
        .generateResearchEmbedding(
            researchId
        );



        res.status(200).json({

            success:true,

            message:
            "Research embedding generated",

            data:result

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