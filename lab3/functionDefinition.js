// // function declaration
// function foo() {
// 	console.log(`Foo`);
// }
// // function expression
// const bar = function () {
// 	console.log(`Bar`);
// }
// console.dir( foo );
// console.dir( bar );

// // Function Constructor
let foo = new Function('console.log(`Foo`)');
foo();