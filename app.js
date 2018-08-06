console.log("app starting");
var express = require("express");
const hbs = require("hbs");
var app = express();
app.set("view engine","hbs");

app.get("/",(req,res) =>{
    
    res.render("home.hbs");
    
    
});


app.get("/aboutus",(req,res) =>{
    
  res.render("about.hbs",{
      
      pageTitle:"About!",
      pageBody: "Hey! This is the about page.!"
      
      
      
  });  
    
    
});

app.listen(3000);