const mongoose = require("mongoose");


const projectMemberSchema = new mongoose.Schema(
{

    projectId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },


    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },


    role:
    {
        type:String,
        enum:[
            "Owner",
            "Research Lead",
            "Researcher",
            "Developer",
            "Designer",
            "Viewer"
        ],
        default:"Viewer"
    },


    permissions:
    {
        type:[String],
        default:[]
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "ProjectMember",
    projectMemberSchema
);