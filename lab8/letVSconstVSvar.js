// var x = 1;
// // new in ES6:
// let y = 2;
// const z = 3;


// const : can not redeclare
// let : can be redeclared


function foo() {
	// create alwayes a global variable
	x = 1;
	console.log(`x in foo: ${x}`); // 1
}

foo();

console.log(`x in main: ${x}`); // ReferenceError: x is not defined

// // var VS let/const in scope context:
// {
// 	var x = 1;
// }

// console.log(`x in main: ${x}`); //


// redeclaring
// var x = 1;

// const x = 9;
// console.log(x);

// let/var VS const

// var x;
// console.log(x);
// let y;
// console.log(y);

// const z = 1;

const user = {
	'name': 'Pesho',
	'pass': '123'
}
user.pass = 'alalaba'; // error ?


console.log( user.pass); //






