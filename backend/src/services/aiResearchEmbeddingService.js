const axios = require("axios");

const ResearchEmbedding =
require("../models/ResearchEmbedding");

const ResearchBlock =
require("../models/ResearchBlock");



const generateResearchEmbedding =
async(researchId)=>{


    // Find Research

    const research =
    await ResearchBlock.findById(
        researchId
    );


    if(!research)
    {
        throw new Error(
            "Research not found"
        );
    }



    // Send text to Python AI Service

    const response =
    await axios.post(

        "http://127.0.0.1:8000/generate-research-embedding",

        {
            text:
            research.title
            +
            " "
            +
            research.content
        }

    );



    const vector =
    response.data.vector;



    // Save Embedding


    const embedding =
    await ResearchEmbedding.create({

        researchId,

        vector,

        modelName:
        response.data.model

    });



    return embedding;


};




module.exports =
{
    generateResearchEmbedding
};