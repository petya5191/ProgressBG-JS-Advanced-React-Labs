function test(f) {
	let x = 2;
	f(x);
	// myFunction(2);
}
function myFunction(x) {
	console.log(x**2);
}

// test(callback)
test( myFunction );

// 4
//undefined













