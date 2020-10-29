const bmw = {
	manifacturer: "BMW",
	speed: 350
}

const theBMWofPesho = {
	door: 3
}
// theBMWofPesho "is a" car
theBMWofPesho.__proto__ = bmw;

console.dir( theBMWofPesho );

console.log( theBMWofPesho.door );// 3
console.log( theBMWofPesho.manifacturer );//
console.log( theBMWofPesho.speed );//



