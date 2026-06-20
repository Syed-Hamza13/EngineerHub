const permissionService =
require("../services/permissionService");



const checkPermission =
(requiredPermission)=>{


return async(req,res,next)=>{


    try
    {

        const {
            projectId,
            userId
        } = req.body;



        const allowed =
        await permissionService.checkPermission(

            projectId,

            userId,

            requiredPermission

        );



        if(!allowed)
        {

            return res.status(403).json({

                success:false,

                message:"Permission denied"

            });

        }



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


};


module.exports = checkPermission;