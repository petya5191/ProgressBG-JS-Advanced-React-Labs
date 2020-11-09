const Car = speed => this.speed = speed;

// equivalent
// const Car = function( speed ) {
// 	return this.speed = speed;
// }


let ford = new Car(230);

console.log( ford );
