let cats = [];

for (var i = 0; i < 3; i++) {
	console.log(i);
    cats[i] = function () {
		let j=i

		return function(j){
			console.log(`Cat ${j} is ready!`);
		}
	}
}

cats[0]();
cats[1]();