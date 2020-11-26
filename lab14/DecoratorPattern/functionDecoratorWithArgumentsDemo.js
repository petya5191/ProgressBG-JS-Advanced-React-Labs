// decorator function
function logDecorator(f){
	return  function(...args){
		console.log(`${f.name} called with args: ${args}`);
		return f(...args);
	}
}

// the function to be decorated
function add(x,y){
	return x+y;
}

// decorate the add function
add = logDecorator(add);

// use the decorated function
console.log(add(2,3));
