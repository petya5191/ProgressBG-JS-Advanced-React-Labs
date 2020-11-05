const foo = function(x) {

	console.log(x**2);
}

const bar = new Function("x", 'console.log(x**2)' );

foo(3);
bar(3);

console.dir(foo);
console.dir(bar);

