"use strict";
function foo() {
	console.dir(this);
	this.alabala = "Alabala";
}


console.log(`this in global scope`);
console.dir(this); // window

// normal function call:
console.log(`this in foo scope`);
foo(); // window


console.log( alabala );