const mongoose = require("mongoose");


const researchVersionSchema =
new mongoose.Schema(
{

    researchId:
    {
        type:mongoose.Schema.Types.ObjectId,

        ref:"ResearchBlock",

        required:true
    },


    versionNumber:
    {
        type:Number,

        required:true
    },


    content:
    {
        type:String,

        required:true
    },


    changedBy:
    {
        type:mongoose.Schema.Types.ObjectId,

        ref:"Profile",

        required:true
    }

},
{
    timestamps:true
}
);


module.exports =
mongoose.model(
    "ResearchVersion",
    researchVersionSchema
);