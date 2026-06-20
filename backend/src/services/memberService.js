const ProjectMember = require("../models/ProjectMember");


// Add Member
const addMember = async(data)=>{

    const {
        projectId,
        userId,
        role = "Member"
    } = data;


    const member = await ProjectMember.create({

        projectId,

        userId,

        role,

        permissions: getDefaultPermissions(role)

    });


    return member;

};



// Get Project Members

const getMembers = async(projectId)=>{

    return await ProjectMember.find({
        projectId
    })
    .populate(
        "userId",
        "role experienceLevel skills technologies interests"
    );

};


// Remove Member

const removeMember = async(
    projectId,
    userId
)=>{

    return await ProjectMember.findOneAndDelete({

        projectId,

        userId

    });

};



// Update Role

const updateRole = async(
    projectId,
    userId,
    role
)=>{


    return await ProjectMember.findOneAndUpdate(

        {
            projectId,
            userId
        },

        {

            role,

            permissions:getDefaultPermissions(role)

        },

        {
            new:true
        }

    );

};



// Default Permissions

const getDefaultPermissions = (role)=>{


    const permissions = {


        Leader:[
            "CREATE_PROJECT",
            "DELETE_PROJECT",
            "MANAGE_MEMBER",
            "EDIT_PROJECT"
        ],



        Member:[
            "VIEW_PROJECT",
            "EDIT_PROJECT_DATA"
        ]

    };


    return permissions[role] || permissions.Member;


};



module.exports = {

    addMember,

    getMembers,

    removeMember,

    updateRole

};