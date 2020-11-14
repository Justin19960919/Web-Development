//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash"); // for string processing

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const Posts = [];

app.get("/",function(req,res){
  // console.log("we are at /");
  res.render('home',{homeStartingContent: homeStartingContent, Posts: Posts});
  // console.log(Posts);
})

app.get("/about",(req,res)=>{
  // console.log("we are in the about page");
  res.render('about',{aboutContent: aboutContent}); // This goes to about.ejs

})

app.get("/contact",(req,res)=>{
  // console.log("we are in the contact page");
  res.render('contact',{contactContent: contactContent}); // This goes to contact.ejs

})

app.get("/compose",(req,res)=>{
  // console.log("we are in the compose page");
  res.render('compose'); // This goes to contact.ejs

})


// express routing parameters
app.get("/posts/:postName",(req,res)=>{
  // console.log(req.params.post);
  const requestedTitle = lodash.kebabCase(req.params.postName);
  for(var i=0; i<Posts.length; i++){
    if(lodash.kebabCase(Posts[i]['title']) === requestedTitle){
      // console.log("Matched",requestedTitle);
      let title = Posts[i].title;
      let post = Posts[i].post;
      res.render('post',{title: title, post: post});
    }}
  

})





// get the post request from compose
app.post("/compose",(req,res)=>{
  const Post = {title: req.body.Title, post: req.body.Post};
  // console.log(Post);
  Posts.push(Post);
  res.redirect("/");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
