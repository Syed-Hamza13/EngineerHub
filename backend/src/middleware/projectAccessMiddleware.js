const ProjectMember =
require("../models/ProjectMember");



const checkProjectAccess = async(req,res,next)=>{

    try{

        const {
            projectId
        } = req.body;


        const userId =
        req.body.authorId;



        if(!projectId || !userId)
        {
            return res.status(400).json({

                success:false,

                message:
                "Project ID and User ID required"

            });
        }



        const member =
        await ProjectMember.findOne({

            projectId:projectId,

            userId:userId

        });



        if(!member)
        {
            return res.status(403).json({

                success:false,

                message:
                "User is not a project member"

            });
        }



        req.projectMember = member;


        next();


    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



module.exports =
checkProjectAccess;