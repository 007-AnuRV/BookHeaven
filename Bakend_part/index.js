import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";

// Initialize express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
dotenv.config();

// Set up port and database URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../Frontend_part/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend_part/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
