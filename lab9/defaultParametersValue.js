function foo(userName, age ) {
	// before ES6
	// if( !age ){
	// 	age = 0
	// }

	// if( age === undefined){
	// 	age = 0
	// }

	// age = age || 0;

	// not working in nodejs
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment
 	age ||= 0;
	// age || (age = 0)

	console.log(`age: ${age}`); // 0 if age is not given
}

foo('maria');// age = 0
foo('maria', 23);// age = 23