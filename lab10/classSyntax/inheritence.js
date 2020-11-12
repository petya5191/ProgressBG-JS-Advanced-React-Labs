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
	}

	greet(){
		console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
	}
}


class Manager extends Person{
	constructor(name, age, managees){
		// reuse the Person Constructor
		// Person.call(this, name, age);
		super(name, age);

		// now set the distinct Manager object properties:
		this.managees = managees || [];
	}

	greet(){
		// reuse the Person.prototype.greet:
		Person.prototype.greet.call(this);

		// add some distinct Manager greeting actions:

		let greetMsg = `\tI manage `;

		for(let i=0; i<this.managees.length; i+=1){
			greetMsg += `${this.managees[i].name},`
		}

		console.log(`\t${greetMsg}`);
	}
}


let pesho = new Person('Pesho', 23);
let maria = new Person('Mria', 33);
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

pesho.greet();
gates.greet();
