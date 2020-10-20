const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");

const app = express();

/*
to serve up static css files and img, we need to use static package 
in express
*/

app.use(express.static("public")); 
// create a folder "public" to hold static files, and reference all the supporting
// css files or images according to the "public" file path

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
	res.sendFile(__dirname+"/signup.html");

})

// use post to get data
app.post("/",function(req,res){

	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	
	console.log("First name:" + firstname);	
	console.log("Last name:" + lastname);
	console.log("Email:" + email);

	var data = {
		members:[
			{
				email_address:email,
				status: "subscribed",
				merge_fields:{
					FNAME: firstname,
					LNAME: lastname
				}
			}
		]
	};
	console.log(data);
	var jsonData = JSON.stringify(data);
	const list_id = "aba9b1cb3f"
	// usX: what server our maichimp account is at
	const url = "https://us2.api.mailchimp.com/3.0/lists/"+list_id;
	
	// specify the type of http request we want to make
	const options = {
		method: "POST",
		auth: "justin:2519e01662f60b0b8d4285020d08ba6b-us2"
	}


	// function(){} call back function
	const request = https.request(url,options,function(response){

	// authentication

		if(response.statusCode === 200){
			res.sendFile(__dirname+"/success.html");
		}else{
			res.sendFile(__dirname+"/failure.html");
		}


		response.on("data",function(data){
			console.log(JSON.parse(data))			
		})
	})
	// send the request to the api, pass JSON data to mailchimp server
	request.write(jsonData);
	request.end();


});


app.post("/failure",function(req,res){
	// when press button, we go to route, and we redirect to the root, which is the signup page
	res.redirect("/");

})



// process.env.PORT: a dynamic port

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is starting at Port 3000");
})





// api key
//2519e01662f60b0b8d4285020d08ba6b-us2

// List ID
//aba9b1cb3f