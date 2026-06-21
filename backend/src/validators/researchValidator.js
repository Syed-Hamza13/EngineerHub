const validateResearch = (data)=>{


    const errors=[];


    if(!data.projectId)
    {
        errors.push("Project ID required");
    }


    if(!data.authorId)
    {
        errors.push("Author ID required");
    }


    if(!data.title)
    {
        errors.push("Research title required");
    }


    if(!data.content)
    {
        errors.push("Research content required");
    }


    return {

        valid: errors.length===0,

        errors

    };

};



module.exports = validateResearch;