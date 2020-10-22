let x = 1;
function foo(x) {

	function bar() {
		console.log(`bar: ${x}`);
	}
	bar(9);
	console.log(`foo: ${x}`);
}

foo(5);
console.log(`main : ${x}`);

// bar: undefined | 5
// foo: 5
// main: 1
