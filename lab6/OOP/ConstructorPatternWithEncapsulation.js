function Drinks( price, producer) {
	// this={}

	let _price = price;

	this.producer = producer;
	this.setPrice = function (priceArr) {
		if( Array.isArray( priceArr) ){
			_price = priceArr;
		}else{
			console.log(`Please, enter an array of prices`);
		}
	}
	this.logPrice = function () {
		console.log( _price );
	}

	// return this;
}

let beer1 = new Drinks( [1.2, 1.0, 2.3], "Beer Producer" );
let wine1 =  new Drinks( [4.2, 3.8, 6.3], "Wine Producer" );

console.dir(beer1);
beer1.price = [9,9,9];
console.dir(beer1);
beer1.logPrice();  // ?


