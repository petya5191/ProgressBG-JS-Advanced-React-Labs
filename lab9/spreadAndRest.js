// function foo(user, age) {
// 	console.log(user);
// 	console.log(age);
// }

// let userData = ['maria', 23,];

// // before ES6
// foo(userData[0], userData[1]);

// // spread in Function Call:
// foo(...userData);

// // spread in Array Literal:
let arr1 = [1,2,3];

// let arr2 = arr1.push(9); // not what we need
// let arr2 = arr1.concat(9);
// let arr2 = [0, ...arr1, 9];

// console.log(`arr1: ${arr1}`); // [1,2,3]
// console.log(`arr2: ${arr2}`); // [0,1,2,3,9]

// rest in function definitio
// function foo(...params) {
// 	console.log(params);
// 	// console.log(arguments);

// 	for (let i = 0; i < params.length; i++) {
// 		console.log(params[i]);
// 	}
// }
// foo(1,2,3);

// function foo(x,...rest) {
// 	console.log( x );
// 	console.log( rest );
// }
// foo(4,5);
// // x = 4, params = [5]
// foo(1,2,3);



// TASK: use Math.max() to find max number in a array
let numbers = [1,3,2,2];
console.log( Math.max(...numbers) ); // 3
