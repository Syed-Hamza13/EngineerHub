const axios = require("axios");

const {
    AI_SERVICE_URL
} = require("../config/aiConfig");



const generateEmbedding = async(
    userId,
    text
)=>{


    try{


        const response =
        await axios.post(

            `${AI_SERVICE_URL}/generate-profile-embedding`,

            {
                userId,
                text
            }

        );


        return response.data;


    }
    catch(error){

        throw new Error(
            "AI Embedding Service Failed: "
            + error.message
        );

    }


};



module.exports = {
    generateEmbedding
};