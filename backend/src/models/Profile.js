const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema(

{

    userId:{
        type:String,
        required:true,
        unique:true
    },


    role:{
        type:String,
        default:""
    },


    experienceLevel:{
        type:String,
        default:""
    },


    bio:{
        type:String,
        default:""
    },


    skills:[
        {
            type:String
        }
    ],


    technologies:[
        {
            type:String
        }
    ],


    algorithms:[
        {
            type:String
        }
    ],


    interests:[
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
    "Profile",
    profileSchema
);