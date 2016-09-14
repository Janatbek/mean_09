function VehicleConstructor(name, numOfPassengers, numOfWheels, action) {
	var vehicle = {};
	vehicle.name = name;
	vehicle.numOfPassengers = numOfPassengers;
	vehicle.numOfWheels = numOfWheels;
	vehicle.makeNoise = action;
	return vehicle;
}
var bike = VehicleConstructor("Mongoose", 1, 2);
bike.makeNoise = function(){
	console.log("Ring ring");
}
// bike.makeNoise();
var sedan = VehicleConstructor("Avalon", 4, 4);
sedan.makeNoise = function(){
	console.log("Honk, Honk");
}
var bus = VehicleConstructor("Mercedes", 50, 6);
bus.pickUp = function(newNum){
	return bus.numOfPassengers += newNum;
}
console.log(bus.numOfPassengers);