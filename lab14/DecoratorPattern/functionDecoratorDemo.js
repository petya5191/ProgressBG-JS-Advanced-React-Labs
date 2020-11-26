//a decorator function:
function dateDecorator(f){
	// decorating phase:


	// return the decorated function
	return function () {
		let d = new Date();
		const formatedDateStr =  `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`
		console.log(`${f.name} was called on ${formatedDateStr}`);

		// console.log(`Howdy World!`);
		f()
	}
}

// the function to be decorated
function howdy(){
	console.log(`Howdy World!`);
}


// decorate the function
howdy = dateDecorator(howdy);

// use the decorated function
howdy();
