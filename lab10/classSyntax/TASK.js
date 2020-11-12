class Person{
	// #salary = 0;

	constructor(name, age){
		this.name = name;
		this.age = age;
		this._salary = 100;
	}

	greet(){
		console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
	}

	set salary(salary){
		console.log(`SALARY IS SET !!!!`);
		this._salary = salary;
	}

	get salary(){
		return this._salary
	}
}

let pesho = new Person('Pesho', 23);

pesho.salary = 10000;
console.log( pesho.salary );

