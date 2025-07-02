import express from "express";
// const express = require("express");
const app = express();

const PORT = 5001;

app.listen(5001, () => {
  console.log(`Server started on PORT ${PORT}`);
});
