const express = require("express");
const app = express();

const port = 8080;




app.listen(port, () => {
    console.log("Listen Command");
})

app.get("/",(req,res)=>{
    res.send("Get Command Invoked");
})