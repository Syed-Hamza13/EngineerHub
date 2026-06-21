const versionService =
require("../services/versionService");



// Create Version

exports.createVersion =
async(req,res)=>{

    try{

        const data = {

            researchId:req.params.id,

            changedBy:req.body.changedBy

        };


        const version =
        await versionService
        .createVersion(data);



        res.status(201).json({

            success:true,

            message:
            "Research version created",

            data:version

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





// Get All Versions

exports.getVersions =
async(req,res)=>{


    try{


        const versions =
        await versionService
        .getVersions(
            req.params.id
        );


        res.status(200).json({

            success:true,

            data:versions

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






// Get Single Version

exports.getSingleVersion =
async(req,res)=>{


    try{


        const version =
        await versionService
        .getSingleVersion(
            req.params.versionId
        );



        if(!version)
        {
            return res.status(404).json({

                success:false,

                message:
                "Version not found"

            });
        }



        res.status(200).json({

            success:true,

            data:version

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