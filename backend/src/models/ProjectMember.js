const mongoose = require("mongoose");


const projectMemberSchema = new mongoose.Schema(
{
    projectId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },


    // Module 1 Profile connection
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    },


    role:
    {
        type: String,

        enum:
        [
            "Leader",
            "Member"
        ],

        default: "Member"
    },


    permissions:
    {
        type: [String],
        default: []
    }

},
{
    timestamps: true
});


module.exports = mongoose.model(
    "ProjectMember",
    projectMemberSchema
);