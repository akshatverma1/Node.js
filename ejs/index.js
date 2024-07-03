const express = require("express");
const app = express();
let port = 88;
const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`Port = ${port}`);
})

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/dice",(req,res)=>{
    let dice = Math.floor(Math.random() * 6)+1;
    res.render("diceroll.ejs",{dice})
})

app.get("/ig/:username",(req,res)=>{
    let {username} =req.params;
    let data = require("./data.json");
    let realData = data[username];
    res.render("insta.ejs",{realData});
})