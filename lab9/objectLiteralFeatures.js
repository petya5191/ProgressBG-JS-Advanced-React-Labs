// // before ES6
// let personFactory = function (name, age) {
// 	return {
// 		name: name,
// 		age:age
// 	}
// }


// // // afer ES6
// let personFactory = function(name, age) {
// 	return {name,age}
// }
// let pesho = personFactory('pesho', 13);
// console.log( pesho.age);

let pesho = {
	name: 'Pesho',
	age: 23,
	greet() {
		console.dir(this);
	}
};


// the this problem:
// let newGreat = pesho.greet;
// pesho.greet();
// newGreat();
