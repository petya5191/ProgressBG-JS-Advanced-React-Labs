let input = [1,2,3,3,3,2,1];
let uniqueSet = new Set( input )
console.log( uniqueSet ); // []

let uniqueArr = Array.from(uniqueSet);
console.log( uniqueArr.reverse() );