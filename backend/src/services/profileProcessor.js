const generateProfileText = (profile)=>{


    let text = "";


    text += `Role: ${profile.role}. `;


    text += 
    `Experience Level: ${profile.experienceLevel}. `;



    if(profile.bio){

        text += 
        `About: ${profile.bio}. `;

    }



    if(profile.skills?.length){

        text +=
        `Skills: ${profile.skills.join(", ")}. `;

    }



    if(profile.technologies?.length){

        text +=
        `Technologies: ${profile.technologies.join(", ")}. `;

    }



    if(profile.algorithms?.length){

        text +=
        `Algorithms knowledge: ${profile.algorithms.join(", ")}. `;

    }



    if(profile.interests?.length){

        text +=
        `Research interests: ${profile.interests.join(", ")}. `;

    }



    return text;

};



module.exports = {
    generateProfileText
};