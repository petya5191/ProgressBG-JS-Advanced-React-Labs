function greet(userName) {
	// let userName = 'Pesho'
	return function () {
		console.log(`Hello, ${userName}`);
	}
}


setTimeout(greet('Pesho'),2000);

console.log(`1`);

setTimeout(greet('Maria'),4000);













