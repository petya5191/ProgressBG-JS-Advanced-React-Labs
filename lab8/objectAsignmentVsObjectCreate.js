// Object copy
let obj1 = {
	id: 1,
}
// DONE: why not work
let obj2 = Object.create(obj1, {
	'id':{
		"value": obj1.id,
	}
} );

obj1.id = 999;
console.log(obj1.id);
console.log(obj2.id);


console.log( obj1 === obj2 );
