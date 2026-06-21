const {
    generateProfileText
} = require("./profileProcessor");


const {
    generateEmbedding
} = require("./aiEmbeddingService");


const {
    saveEmbedding
} = require("./embeddingStorageService");



const updateProfileEmbedding = async(profile)=>{


    const profileText =
    generateProfileText(profile);



    const embeddingResponse =
    await generateEmbedding(
        profile.userId,
        profileText
    );



    const savedEmbedding =
    await saveEmbedding(
        profile.userId,
        embeddingResponse.embedding
    );


    return savedEmbedding;

};



module.exports = {
    updateProfileEmbedding
};