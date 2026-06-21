const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoues");
const projectRoutes = require("./routes/projectRoutes");
const memberRoutes =
require("./routes/memberRoutes");
const researchRoutes =
require("./routes/researchRoutes");
const versionRoutes =
require("./routes/versionRoutes");
const metadataRoutes =
require("./routes/metadataRoutes");
const embeddingRoutes =
require("./routes/embeddingRoutes");
const researchSearchRoutes =
require("./routes/researchSearchRoutes");



const app = express();


app.use(cors());

// Request logging middleware - FIRST
app.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        console.log(`\n📥 ${req.method} ${req.path}`);
        console.log('  Content-Type:', req.headers['content-type']);
        console.log('  Content-Length:', req.headers['content-length']);
    }
    next();
});

// JSON Parser with strict error handling
app.use(express.json({ 
    limit: '50mb',
    strict: true,
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch (e) {
            console.error('❌ JSON Parse Error:', e.message);
            throw new Error('Invalid JSON format');
        }
    }
}));

app.use(express.urlencoded({ 
    extended: true,
    limit: '50mb'
}));

// JSON Parse Error Handler - IMMEDIATELY after middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        console.error('❌ SyntaxError:', err.message);
        return res.status(400).json({
            success: false,
            message: "Invalid JSON in request body - check your JSON syntax",
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
    next(err);
});


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

app.use(
"/api/projects",
projectRoutes
);

app.use(
"/api",
memberRoutes
);

app.use(
    "/api/research",
    researchRoutes
);

app.use(
"/api/research",
versionRoutes
);

app.use(
"/api/research",
metadataRoutes
);

app.use(
"/api/research",
embeddingRoutes
);

app.use(
"/api/research",
researchSearchRoutes
);

app.get("/",(req,res)=>{

    res.json({

        message:"Module 1 Backend Running"

    });

});

// Global Error Handler (must be last middleware)
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.message);
    
    if (err instanceof SyntaxError) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON in request body - check your JSON syntax",
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
    
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Server Error",
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

module.exports = app;