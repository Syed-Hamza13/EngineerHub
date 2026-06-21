const ResearchBlock =
require("../models/ResearchBlock");
const ResearchVersion =
require("../models/ResearchVersion");



exports.createResearch =
async(data)=>{

    const research =
    await ResearchBlock.create(data);

    return research;

};




exports.getProjectResearch =
async(projectId)=>{

    return await ResearchBlock
    .find({
        projectId
    })
    .populate("authorId","name email")
    .sort({
        createdAt:-1
    });

};




exports.getResearchById =
async(id)=>{

    return await ResearchBlock
    .findById(id)
    .populate("authorId");

};




exports.updateResearch = async(id,data)=>{


    const research =
    await ResearchBlock.findById(id);



    if(!research)
    {
        throw new Error(
            "Research not found"
        );
    }



    // Save old version

    await ResearchVersion.create({

        researchId:
        research._id,


        versionNumber:
        research.version,


        content:
        research.content,


        changedBy:
        data.changedBy

    });



    // Update research

    research.content =
    data.content || research.content;


    research.title =
    data.title || research.title;


    research.tags =
    data.tags || research.tags;



    research.version =
    research.version + 1;



    await research.save();



    return research;

};



exports.deleteResearch =
async(id)=>{


    return await ResearchBlock
    .findByIdAndDelete(id);


};