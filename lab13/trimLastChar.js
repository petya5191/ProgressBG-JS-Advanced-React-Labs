const arr = ['maria', 'pesho', 'georgi'];


let str = "";
for (let i = 0; i < arr.length; i++) {
	str += arr[i]+'-'
}

// todo=>done: remove trailing '-' with regex
str = str.replace(/-$/,"");

// let str = arr.join("-");
// test:
console.log(str);

// 'maria-pesho-georgi'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// "a"+"b"