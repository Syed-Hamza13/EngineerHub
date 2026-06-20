const ResearchBlock =
require("../models/ResearchBlock");




// Search Research

exports.searchResearch =
async(filters)=>{


    const query = {};



    // Project Filter

    if(filters.projectId)
    {
        query.projectId =
        filters.projectId;
    }




    // Domain Filter

    if(filters.domain)
    {
        query.domain =
        filters.domain;
    }





    // Keyword / Text Search

    if(filters.keyword)
    {

        query.$or = [

            {
                title:
                {
                    $regex:
                    filters.keyword,

                    $options:"i"
                }
            },


            {
                content:
                {
                    $regex:
                    filters.keyword,

                    $options:"i"
                }
            },


            {
                keywords:
                {
                    $regex:
                    filters.keyword,

                    $options:"i"
                }
            }


        ];

    }





    const research =
    await ResearchBlock
    .find(query)
    .populate(
        "authorId",
        "name email"
    )
    .populate(
        "projectId",
        "name"
    );




    return research;


};