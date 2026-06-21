const ProjectMember = require("../models/ProjectMember");


// Check Permission

const checkPermission = async(
    projectId,
    userId,
    requiredPermission
)=>{

    const member = await ProjectMember.findOne({

        projectId,

        userId

    });


    if(!member)
    {
        return false;
    }


    return member.permissions.includes(
        requiredPermission
    );

};



// Get Default Permissions

const getRolePermissions = (role)=>{


    switch(role)
    {

        case "Leader":

            return [
                "CREATE_PROJECT",
                "DELETE_PROJECT",
                "MANAGE_MEMBER",
                "EDIT_PROJECT"
            ];


        case "Member":

            return [
                "VIEW_PROJECT",
                "EDIT_PROJECT_DATA"
            ];


        default:

            return [];

    }

};



module.exports = {

    checkPermission,

    getRolePermissions

};