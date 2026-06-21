const memberService =
require("../services/memberService");



// Add Member

const addMember = async(req,res)=>{


    try{


        const member =
        await memberService.addMember({

            projectId:req.params.projectId,

            userId:req.body.userId,

            role:req.body.role

        });


        res.status(201).json({

            success:true,

            data:member

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};



// Get Members

const getMembers=async(req,res)=>{


    try{


        const members =
        await memberService.getMembers(
            req.params.projectId
        );


        res.json({

            success:true,

            data:members

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};



// Remove Member

const removeMember=async(req,res)=>{


    try{


        await memberService.removeMember(

            req.params.projectId,

            req.params.userId

        );


        res.json({

            success:true,

            message:"Member removed"

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



// Update Role

const updateRole=async(req,res)=>{


    try{


        const member =
        await memberService.updateRole(

            req.params.projectId,

            req.params.userId,

            req.body.role

        );


        res.json({

            success:true,

            data:member

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};



module.exports={

addMember,

getMembers,

removeMember,

updateRole

};