const mongoose = require("mongoose");


const projectSettingSchema = new mongoose.Schema(
{

    projectId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },


    aiPreferences:
    {
        type:Object,
        default:{}
    },


    researchMode:
    {
        type:String,
        default:"AI_ASSISTED"
    },


    privacyMode:
    {
        type:String,
        enum:[
            "TEAM_ONLY",
            "PUBLIC"
        ],
        default:"TEAM_ONLY"
    }


},
{
    timestamps:true
});


module.exports = mongoose.model(
    "ProjectSetting",
    projectSettingSchema
);