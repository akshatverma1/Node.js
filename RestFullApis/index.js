const express = require("express");
const app = express();
const methodOverride = require("method-override");

const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");


app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"Public")));
app.use(methodOverride("_method"));

let post =[
    {
        id : uuidv4(),
        username : "activa",
        age : "it's is a very relax two wheelers"
    },
    {
        id : uuidv4(),
        username : "bike",
        age : "it's is a two wheelers"
    },
    {
        id : uuidv4(),
        username : "cars",
        age :"this is very good car in the market"
    },
];
app.listen(port, () => {
    console.log("Listen Command");
})
app.get("/post",(req,res)=>{
    res.render("index.ejs",{post});
})
app.get("/post/new",(req,res)=>{
    res.render("form.ejs");
})
app.post("/post",(req,res)=>{
    console.log(req.body);
    let {username,age} = req.body;
    let id = uuidv4();
    post.push({id,username,age});
    // res.send("accepted");
    res.redirect("http://localhost:8080/post")
})
app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    let searchPost = post.find((p)=> id === p.id);
    console.log(searchPost);
    // res.send("This is a Single posts");
    res.render("single.ejs",{searchPost});
})
app.patch("/post/:id",(req,res)=>{
    let newContent =  req.body.age;
    let {id} = req.params;
    let searchPost = post.find((p)=> id === p.id);
    searchPost.age = newContent;
    console.log(searchPost);
    // res.send("Patch Request");
    res.redirect("http://localhost:8080/post/");
})
app.get("/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    let searchPost = post.find((p)=> id === p.id);
    res.render("edit.ejs",{searchPost});
})
app.delete("/post/:id",(req,res)=>{
    let {id} = req.params;
    post = post.filter((p)=> id !== p.id);
    res.redirect("/post/");
})