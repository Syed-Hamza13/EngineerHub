const researchSearchService =
require("../services/researchSearchService");




// Search Research Controller

exports.searchResearch =
async(req,res)=>{


    try
    {


        const filters = {


            keyword:
            req.query.keyword,


            domain:
            req.query.domain,


            projectId:
            req.query.projectId


        };





        const research =
        await researchSearchService
        .searchResearch(filters);





        res.status(200).json({

            success:true,

            count:
            research.length,


            data:
            research

        });



    }
    catch(error)
    {

        res.status(500).json({

            success:false,

            message:
            error.message

        });

    }


};