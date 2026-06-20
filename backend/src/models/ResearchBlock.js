const mongoose = require("mongoose");


const researchBlockSchema = new mongoose.Schema(
{
    projectId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },


    authorId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    },


    title:
    {
        type: String,
        required: true,
        trim: true
    },


    problem:
    {
        type: String,
        default: ""
    },


    content:
    {
        type: String,
        required: true
    },


    tags:
    [
        {
            type:String
        }
    ],


    references:
    [
        {
            type:String
        }
    ],


    domain:
    {
        type:String,
        default:""
    },


    status:
    {
        type:String,
        enum:[
            "DRAFT",
            "ACTIVE",
            "ARCHIVED"
        ],
        default:"DRAFT"
    },


    version:
    {
        type:Number,
        default:1
    },


    summary:
    {
    type:String,
    default:""
    },


    keywords:
    [
        {
            type:String
        }
    ],


    domain:
    {
        type:String,
        default:""
    },


    difficulty:
    {
        type:String,
        enum:[
            "BEGINNER",
            "INTERMEDIATE",
            "ADVANCED"
        ],
        default:"BEGINNER"
    },


    topics:
    [
        {
            type:String
        }
    ]
    },
    {
        timestamps:true
    }
    );


module.exports = mongoose.model(
    "ResearchBlock",
    researchBlockSchema
);