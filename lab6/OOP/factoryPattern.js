// let beer1 = {
// 	"price": [1.2, 1.0, 2.3],
// 	"producer": "Beer Producer",
// 	"setPrice": function (priceArr) {
// 		this.price = priceArr;
// 	}
// }

// let wine1 = {
// 	"price": [4.2, 3.8, 6.3],
// 	"producer": "Wine Producer",
// 	"setPrice": function (priceArr) {
// 		this.price = priceArr;
// 	}
// }

function drinkFactory( price, producer) {
	let obj = {};

	obj.price = price;
	obj.producer = producer;
	obj.setPrice = function (priceArr) {
		this.price = priceArr;
	}

	return obj;
}

let beer1 = drinkFactory( [1.2, 1.0, 2.3], "Beer Producer" );
let wine1 = drinkFactory( [4.2, 3.8, 6.3], "Wine Producer" );

console.log( beer1.price );
console.log( wine1.price );

beer1.setPrice([2,2,2]);
wine1.setPrice([4,4,4]);

console.log( beer1.price );
console.log( wine1.price );

