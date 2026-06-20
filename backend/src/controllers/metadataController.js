const metadataService =
require("../services/metadataService");



// Generate Metadata

exports.generateMetadata =
async(req,res)=>{

    try{


        const researchId =
        req.params.id;



        const metadata =
        await metadataService
        .generateMetadata(
            researchId
        );



        res.status(200).json({

            success:true,

            message:
            "Metadata generated successfully",

            data:metadata

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