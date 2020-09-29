// http://localhost:3000/
// http://electr8.com/

const express = require ('express');
const app = express ();
const path = require("path");

app.listen(3000, () => console.log('Server running on port 3000'));


app.get ('/', function(req, res) {
    let file = path.resolve('views/index.html');
    res.sendFile(file);
});

app.get ("/cart", function(req,res){
    let file = path.resolve ("views/productCart.html")
    res.sendFile(file)
})

app.get ('/header', function(req, res) {
    let file = path.resolve('views/header-footer.html');
    res.sendFile(file);
});

app.get('/productDetail', function(req, res) {
    let file = path.resolve('views/productDetail.html');
    res.sendFile(file);
});

app.get("*", function (req, res) {
    if (req.url.includes(".")){
        let file= path.resolve("public" + req.url);
        return res.sendFile(file);
    }    
    res.send("Not found");
});