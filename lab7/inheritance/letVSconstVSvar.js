// var x = 1;
// // new in ES6:
// let y = 2;
// const z = 3;


// const : can not redeclare
// let : can be redeclared

function foo() {
	x = 1;
	console.log(`x in foo: ${x}`); // 1
}

console.log(`x in main: ${x}`); // ReferenceError: x is not defined

