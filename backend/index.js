const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

// Updated CORS middleware to accept an array of both local and production origins
app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
        "https://vercel.app" // Your exact Vercel frontend URL
    ],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// Root route to prevent "Cannot GET /" error on backend deployment
app.get('/', (req, res) => {
    res.json({ 
        success: true, 
        message: "E-commerce Backend API is running successfully!" 
    })
})

// API routes
app.use("/api", router)

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log("Server is running on port " + PORT)
    })
})
