const axios = require("axios");


const AI_URL =
process.env.NEXCHAT_AI_URL ||
"http://localhost:5000";



exports.generateResearch = async(
    query,
    context
)=>{

    try{


        const response =
        await axios.post(

            `${AI_URL}/research`,

            {
                query,
                context
            }

        );


        return response.data;


    }
    catch(error){


        console.log(
            "Nexchat AI Error:",
            error.message
        );


        throw error;

    }

};