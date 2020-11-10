function foo(userName, age ) {
	// before ES6
	// if( !age ){
	// 	age = 0
	// }

	// if( age === undefined){
	// 	age = 0
	// }

	// age = age || 0;

	// TODO:check why not work in nodejs
 	age ||= 0;
	// age || (age = 0)

	console.log(`age: ${age}`); // 0 if age is not given
}

foo('maria');// age = 0
foo('maria', 23);// age = 23