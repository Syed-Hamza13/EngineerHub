const mongoose = require("mongoose");


const researchEmbeddingSchema =
new mongoose.Schema(
{

    researchId:
    {
        type:mongoose.Schema.Types.ObjectId,

        ref:"ResearchBlock",

        required:true
    },


    vector:
    [
        {
            type:Number
        }
    ],


    modelName:
    {
        type:String,

        default:
        "sentence-transformers/all-MiniLM-L6-v2"
    }


},
{
    timestamps:true
});



module.exports =
mongoose.model(
    "ResearchEmbedding",
    researchEmbeddingSchema
);