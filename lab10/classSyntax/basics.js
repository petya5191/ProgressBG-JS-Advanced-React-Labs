// class Person{
// 	// method definitions
// }

// function foo() {

// }
// console.log( typeof Person );
// console.log( typeof foo );
let obj = {

	dirve(speed) {
		console.log(`drive`);
	}
}


// let Person = function(name, age){
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.greet = function(){
// 	console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
// }


class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
		Person.counter();
	}

	greet(){
		console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
	}

	static counter(){
		Person.count += 1;
	}
}
Person.count = 0;

let pesho = new Person('Pesho', 23);
let maria = new Person('Maria', 33);

console.dir(pesho);
// pesho.greet();

console.log( Person.count );