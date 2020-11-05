function drinkFactory( price, producer) {
	let obj = {};

	// obj.price = price;
	let _price = price;

	obj.producer = producer;

	obj.setPrice = function (priceArr) {
		if( Array.isArray( priceArr) ){
			_price = priceArr;
		}else{
			console.log(`Please, enter an array of prices`);
		}
	}
	obj.logPrice = function () {
		console.log( _price );
	}

	return obj;
}

let beer1 = drinkFactory( [1.2, 1.0, 2.3], "Beer Producer" );
let wine1 = drinkFactory( [4.2, 3.8, 6.3], "Wine Producer" );

console.dir(beer1);
beer1.price = [9,9,9];
console.dir(beer1);
beer1.logPrice();  // ?


