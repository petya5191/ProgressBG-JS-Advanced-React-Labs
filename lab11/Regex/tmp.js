// TODO: why work as normal esc. seq.
let re = /a\f/; // <af>
let str = `a\f`;
console.log( str );
console.log( `----`);


if( re.test(str) ){
	console.log(`Match`);
}else{
	console.log(`NO MATCH`);
}


