var Car = function(speed){
	this.speed = speed;
};

Car.prototype.id = 1;
Car.prototype.drive = function () {
	console.log( `I'm driving with ${this.speed}`);
}


var ford = new Car(100);
var BMW = new Car(200);

// ford.drive();

// console.dir( ford );

// ford object inherits from Car.prototype by __proto__ property:
console.log( ford.__proto__ === Car.prototype); // true
console.log( ford.id === ford.__proto__.id);

