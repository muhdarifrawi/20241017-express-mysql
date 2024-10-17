const express = require("express");
const app = express();
const hbs = require("hbs");



/**
 * ROUTES
 */
app.get("/",function(){
    res.send("HElo");
})

app.listen(3000, function(){
    console.log("Server is running");
})