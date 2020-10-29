function foo(x,y) {
	console.log(`Foo says: ${x+y}`);
	console.log(this);
}

let obj1 = {
	id: 1
};

// foo.apply( obj1, [2,3] );
// foo.call( obj1, 2, 3 );

// let bindedFoo = foo.bind(obj1, 2, 3 );


foo.bind(obj1, 2, 3)();// we call the binded foo() here



