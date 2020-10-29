function Constructor(id) {
	this.id = id;
	this.saidHello = 0;

	function __sayHello(that) {
		that.saidHello++;
		// here "this" is window object!!!
	};

	this.sayHello = function() {
		// console.dir(this); //
		__sayHello(this); // call as normal function
		console.log(`I'm obj ${id}`);
		console.log(`I said hello ${this.saidHello} times`);
	};
}

var obj1 = new Constructor(1);
obj1.sayHello(); //obj1.saidHello = 1
obj1.sayHello(); //obj1.saidHello = 2
obj1.sayHello(); //obj1.saidHello = 2
obj1.sayHello(); //obj1.saidHello = 2
obj1.sayHello(); //obj1.saidHello = 2
obj1.sayHello(); //obj1.saidHello = 2