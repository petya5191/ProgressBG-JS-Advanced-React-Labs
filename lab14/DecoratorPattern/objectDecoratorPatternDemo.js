// A normal Laptop class
class Laptop {
	constructor(price,screenSize){
		this.price = price;
		this.screenSize = screenSize;
	}
}

// Decorator: memory
function memory( laptop ) {
	laptop.getPrice = function() {
		return laptop.price + 75;
	};
}
// Decorator: ssd
function ssd( laptop ) {
	laptop.getPrice = function() {
		return laptop.price + 125;
	};
}

var thinkPad = new Laptop(1000, 13);

// decorate a Laptop instance with memory and ssd
memory( thinkPad );
ssd( thinkPad );

console.log( thinkPad.getPrice() );