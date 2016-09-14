//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumOfXY(x, y){
	var sum = 0;
	for(var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}
// sumOfXY(2, 6);
// Write a loop that will go through an array, find the minimum value, and then return it
var x = [2, 5, 8, 90, 50, -2, 64];
function printMin(x){
	var min;
	for (var i = 0; i < x.length; i++){
		if (x[i] < x[i + 1]){
			min = x[i];
		}
	}
	console.log(min);
}
// printMin(x);
// Write a loop that will go through an array, find the average of all of the values, and then return it
var x = [2, 5, 8, 90, 50, -2, 64];
function printAvg(x){
	var sum = 0;
	var avg;
	for (var i = 0; i < x.length; i++){
		sum += i;
	}
	avg = sum / x.length;
	console.log(avg);
}

// printAvg(x);

var sumOfXY = function(x, y){
	var sum = 0;
	for(var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}

var printMin = function(x){
	var min;
	for (var i = 0; i < x.length; i++){
		if (x[i] < x[i + 1]){
			min = x[i];
		}
	}
	console.log(min);
}

var printAvg = function(x){
	var sum = 0;
	var avg;
	for (var i = 0; i < x.length; i++){
		sum += i;
	}
	avg = sum / x.length;
	console.log(avg);
}

var functions = {
	sumOfXY: function(x, y){
		var sum = 0;
		for(var i = x; i <= y; i++){
			sum += i;
		}
		console.log(sum);
	},
	printMin: function(x){
		var min;
		for (var i = 0; i < x.length; i++){
			if (x[i] < x[i + 1]){
				min = x[i];
			}
		}
		console.log(min);
	},
	printAvg:function(x){
		var sum = 0;
		var avg;
		for (var i = 0; i < x.length; i++){
			sum += i;
		}
		avg = sum / x.length;
		console.log(avg);
	}

}

//Create a JavaScript object called person with the following properties/methods
var person = {
	name: 'Janatbek',
	distance_traveled: 0,
	say_name: function(){
		console.log(this.name);
	},
	say_something(word){
		console.log(word);
	},
	walk: function(){
		alert(this.name + ' is walking');
		this.distance_traveled += 3;
	},
	run: function(){
		alert(this.name + ' is running');
		this.distance_traveled += 10;
	},
	crawl: function(){
		alert(this.name + ' is crawling');
		this.distance_traveled += 1;
	}

}
// person.say_name() // Janatbek
// person.say_something('I am cool'); // I am cool
person.walk();



