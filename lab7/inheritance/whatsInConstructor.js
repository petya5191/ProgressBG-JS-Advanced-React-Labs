const Car = function(speed,id){
	// this === {}
	this.speed = speed;
	// this.id = id;
	// return this
};
Car.prototype.drive = function () {
	console.log(`I'm driving with ${this.speed} km/h.`);
}

const ford1 = new Car(100,11);

console.dir(ford1);

// Factory demo:
const carFactory = function (speed) {
	let obj = {};
	obj.speed = speed;
	return obj;
};
carFactory.prototype.drive = function () {
	console.log(`I'm driving with ${this.speed} km/h.`);
}


const BMW = carFactory(200);
BMW.__proto__  = carFactory.prototype; // done by "new" by defoult
console.dir(BMW);
// console.dir(carFactory.prototype);

BMW.drive();
