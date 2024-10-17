const express = require("express");
const app = express();
const hbs = require("hbs");
const wax = require ("wax-on");

wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

/**
 * TEMPLATE ENGINE
 */
app.set("view engine", "hbs")

/**
 * ROUTES
 */
app.get("/",function(req,res){
    res.render("home");
})

app.listen(3000, function(req,res){
    console.log("Server is running");
})