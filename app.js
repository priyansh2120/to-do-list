const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items=['buy food','cook food','eat food'];
var workitems=[];

app.get('/', function(req,res){
    var today= new Date();

    currentDay = today.getDay();
    // var day="";
    var option={
      weekday: "long",
      day: "numeric", 
      month: "long"
  
    };


    var day=today.toLocaleDateString("en-US", option);
    

    res.render('lists',{listTitle: day, newItems: items});
    // console.log(req.body);
    
});
app.get("/work", function(req,res){
  res.render('lists', {listTitle:"work", newItems: workitems});
});

app.post('/' , function (req, res){
  console.log(req.body);
  items.push(req.body.newItem);
  res.redirect('/');
  
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
