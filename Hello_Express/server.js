var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded());

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/users", function(req, res){

	var users_array = [
	{name :"Michael", email: "michael@codingdojo.com"},
	{name :"Jay", email: "jay@codingdojo.com"},
	{name :"Brendan", email: "brendan@codingdojo.com"},
	{name :"Andrew", email: "andrew@codingdojo.com"}
	];
	res.render('users', {users: users_array});
})
//POST request, data from user form
app.get('/', function(req, res){
	res.render('index');
})
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});

app.get('/', function(request, response){
	response.send("<h1>Hello Express</h1>");
})

app.listen(8000,function(){
	console.log("Listening on port 8000");
})
