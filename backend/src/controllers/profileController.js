const profileService = require("../services/profileService");
const { generateProfileText } = require("../services/profileProcessor");
const { generateEmbedding } = require("../services/aiEmbeddingService");
const { saveEmbedding } = require("../services/embeddingStorageService");
const { updateProfileEmbedding } = require("../services/profileEmbeddingUpdater");


// Create Profile

const createProfile = async(req,res)=>{

    console.log(
      "PROFILE BODY =>",
      req.body
    );

    try{

        const profile =
        await profileService.createProfile(req.body);


        // TEMPORARY: Comment out embedding for debugging
        // const profileText =
        // generateProfileText(profile);


        // const embeddingResponse =
        // await generateEmbedding(
        //     profile.userId,
        //     profileText
        // );

        // const savedEmbedding =
        //     await saveEmbedding(
        //         profile.userId,
        //         embeddingResponse.embedding
        //     );


       res.status(201).json({

    success:true,

    message:"Profile created",

    data:profile

});

    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};


// Get Profile

const getProfile = async(req,res)=>{

    try{

        const {userId} = req.params;


        const profile =
        await profileService.getProfile(
            userId
        );


        if(!profile){

            return res.status(404).json({

                success:false,

                message:"Profile not found"

            });

        }


        res.status(200).json({

            success:true,

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



// Update Profile

    const updateProfile = async(req,res)=>{
    
        try{
        
            const {userId} =
            req.params;
        
        
            const profile =
    await profileService.updateProfile(
        userId,
        req.body
    );
    
    
    if(!profile){
    
        return res.status(404).json({
        
            success:false,
        
            message:"Profile not found"
        
        });
    
    }
    
    
    await updateProfileEmbedding(profile);
    
    
    res.status(200).json({
    
        success:true,
    
        message:"Profile updated successfully",
    
        data:profile
    
    });
    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



// Delete Profile

const deleteProfile = async(req,res)=>{

    try{

        const {userId} =
        req.params;


        const profile =
        await profileService.deleteProfile(
            userId
        );


        if(!profile){

            return res.status(404).json({

                success:false,

                message:"Profile not found"

            });

        }


        res.status(200).json({

            success:true,

            message:"Profile deleted successfully"

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

const addSkill = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {skill}=req.body;

        const profile =
        await profileService.addSkill(
            userId,
            skill
        );


        await updateProfileEmbedding(profile);


        res.status(200).json({
        
            success:true,
        
            message:"Skill added",
        
            data:profile
        
        });

    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




const removeSkill = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {skill}=req.body;


        const profile =
        await profileService.removeSkill(
            userId,
            skill
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Skill removed",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

const addTechnology = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {technology}=req.body;


        const profile =
        await profileService.addTechnology(
            userId,
            technology
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Technology added",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





const removeTechnology = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {technology}=req.body;


        const profile =
        await profileService.removeTechnology(
            userId,
            technology
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Technology removed",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

const addAlgorithm = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {algorithm}=req.body;


        const profile =
        await profileService.addAlgorithm(
            userId,
            algorithm
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Algorithm added",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





const removeAlgorithm = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {algorithm}=req.body;


        const profile =
        await profileService.removeAlgorithm(
            userId,
            algorithm
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Algorithm removed",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

const addInterest = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {interest}=req.body;


        const profile =
        await profileService.addInterest(
            userId,
            interest
        );

        await updateProfileEmbedding(profile);

        res.status(200).json({

            success:true,

            message:"Interest added",

            data:profile

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





const removeInterest = async(req,res)=>{

    try{

        const {userId}=req.params;

        const {interest}=req.body;


        const profile =
        await profileService.removeInterest(
            userId,
            interest
        );

        await updateProfileEmbedding(profile);
        
        res.status(200).json({

            success:true,

            message:"Interest removed",

            data:profile

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