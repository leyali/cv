//jshint esversiom:6

const express = require("express");
const bodyParser = reqiore ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

res.send("The result of the calculation is " + result);
  res.sendFile(_diename+"/index.html");
});

app.post("/", function(req, res){
. res.send("Thanks for posting that!")
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});
