function foo(){console.log(`Foo`);};
let obj = {};


// Each function is a Function Object and has prototype property
console.dir( foo.prototype); // {}
console.dir( foo.__proto__); // {}

// Each object __proto__
console.dir( obj.prototype ); // undefined |
console.dir( obj.__proto__ ); // {}