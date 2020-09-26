// http://localhost:3000/
// http://mitienda.com/

const express = require (`express`);
const app = express ();
const path = require("path");


app.get ("/", function(req,res){
    let file = path.resolve ("views/index.html")
    res.sendFile(file)
})

app.get("/registro", function(req,res){
    let file = path.resolve ("views/register.html")
    res.sendFile(file)
})

app.get("/login", function(req,res){
    let file = path.resolve ("views/login.html")
    res.sendFile(file)
})

app.get("*", function (req,res){
    if (req.url.includes(".")){
        let file= path.resolve ("public" + req.url)
        return res.sendFile(file)
    }

    
    res.send("Not found")
})

app.listen(3000)