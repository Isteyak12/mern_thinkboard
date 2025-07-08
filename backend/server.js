import express from "express";
// const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.status(200).send("Hello from the server!");
});

app.post("/api/notes", (req, res) => {
  res.status(201).send("Hello from the server!");
});

const PORT = 5001;

app.listen(5001, () => {
  console.log(`Server started on PORT http://localhost:${PORT}`);
});
