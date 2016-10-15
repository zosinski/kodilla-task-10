// definicja "klas"
function Bicycle(speed) {
	this.speed = speed;
};
function Car(speed) {
	this.speed = speed;
};

Bicycle.prototype.calcTravelTime = calcTravelTime;
Car.prototype.calcTravelTime = calcTravelTime;

function calcTravelTime(distance) {
	var time = distance / this.speed;
	return time;
};

// test
test();

function test() {
	
	var myBicicle = new Bicycle(30);
	console.log('Bicycle');
	console.log('speed: ' + myBicicle.speed);
	console.log('travel time: ' + myBicicle.calcTravelTime(10));

	var myCar = new Car(100);
	console.log('Car');
	console.log('speed: ' + myCar.speed);
	console.log('travel time: ' + myCar.calcTravelTime(10));	

};


