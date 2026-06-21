const User = require("../models/User");


// Signup

const signup = async(req,res)=>{

try{

const {
    fullName,
    email,
    password
}=req.body;



const existingUser =
await User.findOne({
    email
});


if(existingUser){

return res.status(400).json({

success:false,

message:"Email already registered"

});

}



const user =
await User.create({

fullName,
email,
password

});



res.status(201).json({

success:true,

message:"Account created successfully",

user

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};




// Login

const login = async(req,res)=>{


try{


const {
email,
password
}=req.body;



const user =
await User.findOne({
email,
password
});



if(!user){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}



res.status(200).json({

success:true,

message:"Login successful",

user

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

signup,

login

};