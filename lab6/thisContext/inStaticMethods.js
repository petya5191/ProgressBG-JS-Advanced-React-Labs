const Developer = function (name) {
	this.name = name;
	// normal (object) method:
	this.greet= function(){
		console.log(`I'm ${this.name}`);
	}

	console.dir(this);
}

// static property
Developer.id = 1;

// static method:
Developer.checkIn = function () {
	console.log(`checkIn works`);
	console.dir(this);
}
// console.log( Developer.id );
// console.dir(Developer);


// let dev1 = new Developer("Maria");
// dev1.greet();
Developer.checkIn();