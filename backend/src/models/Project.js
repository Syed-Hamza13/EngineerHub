const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema(
{
    ownerId:
    {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },


    name:
    {
        type:String,
        required:true,
        trim:true
    },


    description:
    {
        type:String,
        default:""
    },


    domain:
    {
        type:String,
        required:true
    },


    status:
    {
        type:String,
        enum:[
            "ACTIVE",
            "ARCHIVED"
        ],
        default:"ACTIVE"
    },


    tags:
    {
        type:[String],
        default:[]
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Project",
    projectSchema
);