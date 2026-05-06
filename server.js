const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("DB Error:", err));

// Schema
const Contact = mongoose.model("Contact", {
    name: String,
    email: String,
    message: String
});

// API
app.post("/contact", async (req, res) => {
    try {
        console.log("API HIT");

        const newContact = new Contact(req.body);
        await newContact.save();

        console.log("Saved to DB");

        // ✅ IMPORTANT FIX (JSON response)
        res.json({ message: "Saved successfully" });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Error saving data" });
    }
});

// Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});