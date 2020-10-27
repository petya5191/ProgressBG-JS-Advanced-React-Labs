let cats = [];

for (var i = 0; i < 3; i++) {
    cats[i] = function () {
		let j=i;
		return function(){
			console.log(`Cat ${j} is ready!`);
		}
	}();
}

cats[0]();
cats[1]();