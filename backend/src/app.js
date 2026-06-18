const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoues");

const app = express();


app.use(cors());

app.use(express.json());


// Routes

const profileRoutes = require("./routes/profileRoutes");


app.use(
    "/api/profile",
    profileRoutes
);

app.use(
    "/api/auth",
    authRoutes
);



app.get("/",(req,res)=>{

    res.json({

        message:"Module 1 Backend Running"

    });

});




module.exports = app;