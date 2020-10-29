let obj = {
	id: 1,
	2: 2,
	"a 1": 3
}

console.dir( obj.id );  // 1
console.dir( obj[2] );
console.dir( obj["a 1"] );

let propName = "2";


console.dir(obj[ propName ]); //
console.dir(obj[ "2" ]); //