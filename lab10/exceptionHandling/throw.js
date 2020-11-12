function foo(x) {
	console.log(y);
	if(x === 0){
		throw new Error("Division by zero");
	}
	console.log(x);
}




try{
	foo(0);
}catch(err){
	console.dir(err);
	console.error(err.message);
}

