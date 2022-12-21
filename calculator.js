const express= require("express");
const app=express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/", function(req,res){
var height=Number(req.body.h1);
var weight=Number(req.body.w1);
var results=weight/(height*height);
    res.send("your BMI is"+ results);
});


app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req,res){
var num1=Number(req.body.n1);
var num2=Number(req.body.n2);
var results=num1+num2;
    res.send("the results"+ results);
});

app.listen(5000, function(){
    console.log("server started in 5000");
});