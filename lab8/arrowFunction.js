// function declaration
function foo(x) {
	console.log(`x in Foo: ${x}`);
}

// function expression
const bar = function (x) {
	console.log(`x in Bar: {x}`);
}

// arrow syntax:
const baz = x=>{
	console.log(`x in Baz: {x}`);
}

console.dir(foo);
console.dir(bar);
console.dir(baz);


// // arrow function syntax:
// const pow = function (x) {
// 	return x**2;
// }
// // (param1, param2, …, paramN) => { statements }
// const powArrow = x => x**2;




// const calc = function (action, x) {
// 	console.log( action(x) );
// }

// // both syntaxes are identical:
// calc( function (x,y) {
// 	return x**2;
// }, 5);

// calc( x => x**2 , 5 );






