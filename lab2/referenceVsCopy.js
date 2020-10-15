// Copy by value:
// let x = 5;
// let a = x;
// x = 9;
// console.log( a ); // 5
// console.log( x ); // 9

// Copy by reference:
// let x = [5];
// let a = x;
// x[0] = 9;
// console.log( a ); // []
// console.log( x ); // 9

// //RAM:
// x, a: [5]
// x: 121
// a: 121

// 121: [9]

// let x = [5];
// let a = x;
// x[1] = 9;

// x, a:[5,9]

// console.log(x); // [5,9]
// console.log(a); // [5,9] | [5] | []
