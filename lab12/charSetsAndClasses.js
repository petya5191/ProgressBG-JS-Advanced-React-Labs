// a[ld]a => "ala", "ada"

// let re = /a[lrd]a/;
// let tests = [
// 	"ala", // ok
// 	"ada", // ok
// 	"ara", // not ok
// 	"sara", // not
// ]

// let re = /[a-zA-Z0-9_.-]/;
// let tests = [
// 	"s", // OK
// 	"1", // OK,
// 	"_", // OK
// 	"*", // not ok
// 	".", // OK
// 	"-", // ok
// ]

// tests.forEach(str => {
// 	if(re.test(str)){
// 		console.log(`OK`);
// 	}else{
// 		console.log(`NO`);
// 	}
// });

// let re = /a[\s\n\r]+b/;
// let tests = [
// `a
// b`, // OK
// `a b`, // OK
// `a     b`, //  ok
// `a	b`, // OK
// `ab`, // NOT OK
// ];


let re = /^[a-zA-Z_$]\w*/mg
let tests = [
	"_", // OK
	"$", // OK
	"__proto__", // OK
	"asd", // ok
	"Car", // ok
	"1a", // NO MATCH
	"abc123", // OK
	"$test", // OK
	"user-name" // NO MATCH
]

tests.forEach(str => {
	if(re.test(str)){
		console.log(`OK`);
	}else{
		console.log(`NO MATCH`);
	}
});




