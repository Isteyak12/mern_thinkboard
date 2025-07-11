import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js"
// const express = require("express");
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json());

connectDB()

app.use("/api/notes", notesRoutes);
// app.use("/api/products");
// app.use("/api/posts");
// app.use("/api/payments");
// app.use("/api/emails");
const PORT = 5001;

app.listen(5001, () => {
  console.log(`Server started on PORT http://localhost:${PORT}`);
});
