let obj = {
	id:1,
	logThis(){
		console.log(this);
	}
}

// this in method call:
// obj.logThis();

// this in Constructor call:
const Developer = function (name) {
	this.name = name;
	console.dir(this);
}


let dev1 = new Developer('pesho');