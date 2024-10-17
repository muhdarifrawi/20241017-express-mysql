const express = require("express");
const app = express();
const hbs = require("hbs");

/**
 * TEMPLATE ENGINE
 */
app.set("view engine", "hbs")

/**
 * ROUTES
 */
app.get("/",function(req,res){
    res.render("hello");
})

app.listen(3000, function(req,res){
    console.log("Server is running");
})