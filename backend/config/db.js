const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        // This will print to let you know the connection actually worked
        console.log("MongoDB connection handshake complete.");
    } catch(error) {
        console.error("Error detected inside connectDB function:");
        // This passes the error up to your index.js file so it knows it failed!
        throw error; 
    }
}

module.exports = connectDB;
