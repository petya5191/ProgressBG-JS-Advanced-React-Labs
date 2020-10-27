var examples = {
	'simple': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		function outer(){
			var x = 5;

			function inner(){
				console.log(x);
			}

			return inner;
		}

		var inner = outer();
		inner();
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'inLoopProblemSimple': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		function outer(){
			for (var i = 0; i < 5; i++) {
				function inner(){
					console.log(i);
				}
			}

			return inner;
		}

		var inner = outer();
		inner();
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'inLoopProblem': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var cats = [];

		for (var i = 0; i < 3; i++) {
			cats[i] = function(){
				console.log(`Cat ${i} is ready!`);
				// note: the value of 'i' is determined when the function is invoked!
			}
		}

		cats[0](); //Cat 3 is ready!
		cats[1](); //Cat 3 is ready!
		cats[2](); //Cat 3 is ready!
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'inLoopProblemSolutionIIFE': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var cats = [];

		for (var i = 0; i < 3; i++) {
			(function(i){
				cats[i] = function(){
					console.log(`Cat ${i} is ready!`);
					// note: the value of 'i' is determined when the function is invoked!
				}
			})(i)
		}

		cats[0](); //Cat 0 is ready!
		cats[1](); //Cat 1 is ready!
		cats[2](); //Cat 2 is ready!
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'inLoopProblemSolutionFactory': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var cats = [];

		function catMaker(i){
			return function(){
				console.log(`Cat ${i} is ready!`);
				// note: the value of 'i' is determined when the function is invoked!
			}
		}

		for (var i = 0; i < 3; i++) {
			cats[i] = catMaker(i);
		}

		cats[0](); //Cat 0 is ready!
		cats[1](); //Cat 1 is ready!
		cats[2](); //Cat 2 is ready!
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'timeoutProblem': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var colors = ["red", "green", "blue"];

		for (var i = 0; i < colors.length; i++) {
			setTimeout(function(){
				changeBG("box", colors[i]);
			}, 1000)
		}

		function changeBG(id, color){
			var node = document.getElementById(id);
			node.style.background = color;
		}
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'timeoutFixIIFE': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var colors = ["red", "green", "blue"];

		for (var i = 0; i < colors.length; i++) {
			(function(i){
				setTimeout(function(){
					changeBG("box", colors[i]);
				}, 1000*i)
			})(i);
		}

		function changeBG(id, color){
			var node = document.getElementById(id);
			node.style.background = color;
		}
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'timeoutFixSeparateCall': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var colors = ["red", "green", "blue"];

		for (var i = 0; i < colors.length; i++) {
			doTimeout(i);
		}

		function doTimeout(i){
			setTimeout(function(){
				changeBG("box", colors[i]);
			}, i*1000)
		}

		function changeBG(id, color){
			var node = document.getElementById(id);
			node.style.background = color;
		}
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'player': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
};

examples.simple();


