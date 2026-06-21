const axios = require("axios");


const aiClient = axios.create({

    timeout:10000

});


const AI_EMBEDDING_URL =
process.env.AI_EMBEDDING_URL ||
"http://localhost:8000/api/generate-research-embedding";



exports.generateEmbedding = async(text)=>{

    const response =
    await aiClient.post(

        AI_EMBEDDING_URL,

        {
            text
        }

    );


    return response.data.embedding;

};