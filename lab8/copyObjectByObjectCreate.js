// Object copy
let obj1 = {
	id: 1, // own property
}

// obj2 = {
	id: 1
// }
// obj2.__proto__ = obj1;

let obj2 = Object.create(obj1, {
	"id":{
		"value": obj1.id,
		"enumerable": false // show property
	}
});


console.dir(obj1);
console.dir(obj2);


obj1.id = 999;
console.dir(obj2.id); // 999 | 1


