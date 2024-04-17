const express = require("express");
const app = express();

app.get("/home", (req,res)=>{
    res.send("Welcome to Homepage");
});

PORT = 8000;
app.listen(PORT);