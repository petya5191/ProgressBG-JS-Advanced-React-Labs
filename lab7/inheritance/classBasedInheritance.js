// create 'Car' constructor
var Car = function(manufacturer, speed){
	this.manufacturer = manufacturer || undefined;
	this.speed= speed || 100;
}
Car.prototype= {
	drive: function(){
		if (this.wings >= 2){
			console.log(`Flying wiht ${this.speed} km/h`);
		}else{
			console.log(`Driving wiht ${this.speed} km/h`);
		}
	}
}

// create 'Ford' constructor
var Ford = function( manifacturer, speed){
	// use the parent constructor
	Car.call(this, manifacturer, speed );
}
// set the prototype chain
// Ford.prototype.__proto__ = Car.prototype;
Ford.prototype = Object.create(Car.prototype)

// create 'ford' object
var ford = new Ford('Ford', 200);
ford.drive(); // ?

console.dir(ford);
// speed, manifacturer,


// // create 'theFordOfPesho' object
// var theFordOfPesho = new Ford(300);
// theFordOfPesho.wings = 2;


// ford.drive();
// theFordOfPesho.drive();