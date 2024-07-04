const express = require("express");
const app = express();
let port = 2222;

app.listen(port,(req,res)=>{
    console.log("Akshat");
})
app.get("/registered",(req,res)=>{
    res.send("Response get");
})
app.post("/registered",(req,res)=>{
    res.send("Response Post");
})