// // foo() is passed as argument to bar() function.
// const foo = function () {
// 	console.log(`Foo`);
// }
// const bar = function (f) {
// 	// let f = function () {
// 	// 	console.log(`Foo`);
// 	// }
// 	console.log(`Bar`);
// 	f();
// }

// bar( foo );

// // Bar
// // Foo

// function sum(x,y) {
// 	console.log(x+y);
// }
// Log in console the result of sum(2,3) after 2sec
// console.log( sum(2,3) );

// setTimeout( sum, 2000);


// setTimeout( ?, 2000)
// 5
// setTimeout(undefined , 2000)


// foo as returned value of bar
const foo = function () {
	console.log(`Foo`);
}


const bar = function () {
	return foo;
}

bar()();