const UserEmbedding = require("../models/UserEmbedding");


const saveEmbedding = async(
    userId,
    embedding
)=>{

    const data =
    await UserEmbedding.findOneAndUpdate(

        {
            userId
        },

        {
            embedding,
            modelName:"all-MiniLM-L6-v2"
        },

        {
            new:true,
            upsert:true
        }

    );


    return data;

};



module.exports = {
    saveEmbedding
};