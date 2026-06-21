require("dotenv").config();

const Project = require("./src/models/Project");
const ProjectMember = require("./src/models/ProjectMember");
const ProjectSetting = require("./src/models/ProjectSetting");
const app = require("./src/app");

const connectDB = require("./src/config/db");


const PORT = process.env.PORT || 5000;


// Database Connection
connectDB();

console.log("Project Models Loaded");


const server = app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📍 API URL: http://localhost:${PORT}/api`);
});

// Error handling for server
server.on('error', (error) => {
    console.error('❌ Server Error:', error);
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});