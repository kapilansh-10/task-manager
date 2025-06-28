const express = require("express")          // Import express
const mongoose = require("mongoose")       // Import mongoose for DB
const cors = require("cors")               // Import cors
require("dotenv").config();                // Load .env variables


const app = express() // Create express app
const PORT = process.env.PORT || 5000; // port to run the server on 

// Middleware
app.use(cors());                          // Allow cross-origin requests
app.use(express.json())                  // parse incoming JSON data

// adding taskRoutes
const taskRoutes = require("./routes/taskRoutes")
app.use("/api/routes", taskRoutes)

// Test route
app.get('/', (req, res) => {
    res.send("API is running...")
})

// Connect mongoDB

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");

    // Start the server only after DB connects
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}).catch(err => console.log(err));