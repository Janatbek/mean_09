function VehicleConstructor(name, speed, numOfPassengers, numOfWheels) {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	this.distance_travelled = 0;
	this.name = name;
	this.speed = speed || 0;
	this.numOfPassengers = numOfPassengers;
	this.numOfWheels = numOfWheels;
	this.vin = createVin();
	function createVin(){
		var vin = '';
		for (var i = 32; i > 0; --i){
			vin += chars[Math.round(Math.random() * (chars.length - 1))];	
		} 
		return vin;
	}
}

VehicleConstructor.prototype.updateDistanceTravelled = function(){
	distance_travelled += this.speed;
}
VehicleConstructor.prototype.makeNoise = function(){
	console.log("makes noise");
}
VehicleConstructor.prototype.move = function(arg){
	updateDistanceTravelled();
	this.makeNoise();
	return this;
}
VehicleConstructor.prototype.checkMiles = function(){
	console.log(distance_travelled);
	return this;
}
var car = new VehicleConstructor("Avalon", 35, 4, 4);
console.log(car.vin);

