let beer1 = {
	"price": [1.2, 1.0, 2.3],
	"producer": "Beer Producer",
	"setPrice": function (priceArr) {
		beer1.price = priceArr;
	}
}

let wine1 = {
	"price": [4.2, 3.8, 6.3],
	"producer": "Wine Producer",
	"setPrice": function (priceArr) {
		wine1.price = priceArr;
	}
}

beer1.price[0] = 999;

beer1.setPrice([3.2, 1.0, 2.3]);
console.log( beer1);



