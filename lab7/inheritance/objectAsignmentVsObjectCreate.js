// Object assignment (just make anoter reference )
// let obj1 = {
// 	id: 1
// }

// let obj2 = obj1;
// obj2.name="obj2";
// obj1.id = 9;

// console.dir(obj2);
// console.dir(obj1);

// console.log( obj1 === obj2 );

// Object created by prototype of another object:
// let obj1 = {
// 	id: 1
// }
// let obj2 = Object.create(obj1);
// console.dir(obj2);
// console.dir(obj2.id);

// obj2.id = 2;
// console.dir( obj1 );
// console.dir( obj2 );

// console.log( obj1 === obj2 );

// Object copy
let obj1 = {
	id: 1,
}
// TODO: why not work
let obj2 = Object.create(obj1, {
	'id':{
		"value": obj1.id
	}
} );

console.dir( obj1 );
console.dir( obj2 );

console.log( obj1 === obj2 );
