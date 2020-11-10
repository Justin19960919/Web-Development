const express = require("express");
const https =  require("https");
const bodyParser = require("body-parser");

// requiring our self defined module date.js  & requires function
const date = require(__dirname +"/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
// start bodyparser
app.use(express.static("public")); // use the public folder as static resources for files

// It is possible to push items into an array that is a const
let items =['food1','food2','food3'];
let workItems = [];


app.set('view engine','ejs');

app.get("/",function(req,res){
  let day = date.getDate();


  // if(currentDay === 0 | currentDay === 6){
  //   day = "weekend";
  // }else{
  //   day =  "weekday";
  // }
  // gets the view engine to render the page
  // looks inside the "views" folder and then list.js
  // listTitle is the variable in list.ejs
  res.render('list',{listTitle: day, newListItems: items});
})


app.post("/",function(req,res){
  var newItem = req.body.newItem; 
  console.log(req.body);

  if(req.body.list === 'Work List'){
    workItems.push(newItem);  
    res.redirect("/work"); // redirect to get /work
  }else{
    items.push(newItem);
    res.redirect("/");
  }

})


app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List", newListItems: workItems});
})


app.get("/about",(req,res)=>{
  res.render("about");
})


app.listen(3000,function(){
  console.log("Server is running at port 3000");
})


