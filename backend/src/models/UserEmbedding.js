const mongoose = require("mongoose");


const userEmbeddingSchema = new mongoose.Schema(

{

    userId:{
        type:String,
        required:true,
        unique:true
    },


    embedding:[
        {
            type:Number
        }
    ],


    modelName:{
        type:String,
        default:"all-MiniLM-L6-v2"
    }


},

{
    timestamps:true
}

);


module.exports = mongoose.model(
    "UserEmbedding",
    userEmbeddingSchema
);