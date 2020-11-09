let console = {
	log: function (x) {
		if(Math.random() === 0.1){
			console.log(x)
		}
	}
}


// pure function:
let circleAreaExpPure = function(r){
	return r**2;
}
let res = circleAreaExpPure(3) + 4;


// unpure function:
let circleAreaExpUnpure = function(r){
	console.log( r**2);
}
let res2 = circleAreaExpUnpure(3);
console.log(res2);







