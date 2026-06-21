const ResearchVersion =
require("../models/ResearchVersion");


const ResearchBlock =
require("../models/ResearchBlock");



// Create New Version

exports.createVersion = async(data)=>{


    const research =
    await ResearchBlock.findById(
        data.researchId
    );


    if(!research)
    {
        throw new Error(
            "Research not found"
        );
    }



    const newVersion =
    await ResearchVersion.create({

        researchId:
        data.researchId,


        versionNumber:
        research.version,


        content:
        research.content,


        changedBy:
        data.changedBy

    });



    return newVersion;

};





// Get All Versions

exports.getVersions =
async(researchId)=>{


    return await ResearchVersion
    .find({
        researchId
    })
    .populate(
        "changedBy",
        "name email"
    )
    .sort({
        versionNumber:-1
    });


};






// Get Single Version

exports.getSingleVersion =
async(versionId)=>{


    return await ResearchVersion
    .findById(versionId)
    .populate(
        "changedBy",
        "name email"
    );


};