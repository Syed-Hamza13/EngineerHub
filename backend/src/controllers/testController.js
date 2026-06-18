const Profile = require("../models/Profile");
const UserEmbedding = require("../models/UserEmbedding");


// Create Test Profile
exports.createTestProfile = async(req,res)=>{

    try{

        const profile = await Profile.create({

            userId:"user001",

            role:"AI Developer",

            experienceLevel:"Intermediate",

            bio:"Working on AI and Backend systems",

            skills:[
                "Python",
                "JavaScript",
                "React"
            ],

            technologies:[
                "TensorFlow",
                "MongoDB",
                "Node.js"
            ],

            algorithms:[
                "RAG",
                "Graph Algorithms"
            ],

            interests:[
                "Artificial Intelligence",
                "Cyber Security"
            ]

        });


        res.status(201).json({
            success:true,
            profile
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// Create Test Embedding

exports.createTestEmbedding = async(req,res)=>{

    try{


        const embedding = await UserEmbedding.create({

            userId:"user001",

            embedding:[
                0.234,
                0.567,
                0.891
            ],

            modelName:
            "all-MiniLM-L6-v2"

        });


        res.status(201).json({

            success:true,
            embedding

        });


    }
    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

};