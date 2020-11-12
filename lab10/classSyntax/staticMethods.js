
let Person = function(name, age){
	this.name = name;
	this.age = age;

	Person.counter();
}

Person.prototype.greet = function(){
	console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
}

// static property
Person.count = 0;

// static method:
Person.counter = function (){
	Person.count += 1;
}





let pesho = new Person('Pesho', 23);
let maria = new Person('Maria', 23);

// Person.counter();?

// console.dir(Person);
// console.dir(pesho);


console.log( Person.count ); // 2




