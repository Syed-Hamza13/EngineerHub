const Profile = require("../models/Profile");


// Create Profile

const createProfile = async(data)=>{

    const profile = await Profile.create(data);

    return profile; 

};


// Get Profile

const getProfile = async(userId)=>{

    const profile = await Profile.findOne({
        userId
    });

    return profile;

};


// Update Profile

const updateProfile = async(
    userId,
    data
)=>{

    const profile =
    await Profile.findOneAndUpdate(
        {
            userId
        },
        data,
        {
            new:true
        }
    );


    return profile;

};


// Delete Profile

const deleteProfile = async(userId)=>{

    const profile =
    await Profile.findOneAndDelete({
        userId
    });


    return profile;

};

// Add Skill

const addSkill = async(userId, skill)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $addToSet:{
                skills:skill
            }
        },

        {
            new:true
        }

    );


    return profile;

};



// Remove Skill

const removeSkill = async(userId, skill)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $pull:{
                skills:skill
            }
        },

        {
            new:true
        }

    );


    return profile;

};

// Add Technology

const addTechnology = async(userId, technology)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $addToSet:{
                technologies:technology
            }
        },

        {
            new:true
        }

    );


    return profile;

};




// Remove Technology

const removeTechnology = async(userId, technology)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $pull:{
                technologies:technology
            }
        },

        {
            new:true
        }

    );


    return profile;

};


// Add Algorithm

const addAlgorithm = async(userId, algorithm)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $addToSet:{
                algorithms:algorithm
            }
        },

        {
            new:true
        }

    );


    return profile;

};




// Remove Algorithm

const removeAlgorithm = async(userId, algorithm)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $pull:{
                algorithms:algorithm
            }
        },

        {
            new:true
        }

    );


    return profile;

};

// Add Interest

const addInterest = async(userId, interest)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $addToSet:{
                interests:interest
            }
        },

        {
            new:true
        }

    );


    return profile;

};




// Remove Interest

const removeInterest = async(userId, interest)=>{

    const profile =
    await Profile.findOneAndUpdate(

        {
            userId
        },

        {
            $pull:{
                interests:interest
            }
        },

        {
            new:true
        }

    );


    return profile;

};



module.exports={

    createProfile,

    getProfile,

    updateProfile,

    deleteProfile,


    addSkill,

    removeSkill,


    addTechnology,

    removeTechnology,


    addAlgorithm,

    removeAlgorithm,


    addInterest,

    removeInterest

};