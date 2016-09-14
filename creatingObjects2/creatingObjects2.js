function VehicleConstructor(name, speed, numOfPassengers, numOfWheels) {
	var self = this;
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}
	this.name = name;
	this.speed = speed || 0;
	this.numOfPassengers = numOfPassengers;
	this.numOfWheels = numOfWheels;
	this.makeNoise = function(){
		console.log("makes noise");
	}
	this.move = function(arg){
		updateDistanceTravelled();
		this.makeNoise();
	}
	this.checkMiles = function(){
		return distance_travelled;
	}	
}
var car = new VehicleConstructor("Avalon", 35, 4, 4);
console.log(car.checkMiles());
car.move();
console.log(car.checkMiles());

	
