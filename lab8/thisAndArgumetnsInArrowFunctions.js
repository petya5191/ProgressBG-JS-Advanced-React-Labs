// let pesho = {
// 	name: 'Pesho',
// 	greet: function () {
// 		console.log( this.name );
// 	}
// }

// pesho.greet();

// console.log( this );

// let maria = {
// 	name: 'Maria',
// 	logThis: function () {
// 		console.log(this);
// 	},


// 	greet: ()=> {
// 		console.log(this)
// 	}
// };

// maria.logThis(); // {maria}
// maria.greet; // {maria}


function sum() {
	console.dir( arguments );
}


console.log( arguments );

const sumArrow = () => {
	console.dir( arguments );
}
console.log( sum(2,4) );
console.log( sumArrow(2,3,4) );