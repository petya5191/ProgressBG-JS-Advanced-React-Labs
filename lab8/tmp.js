let obj = {
	prototype: {
		'id': 1
	},
	__proto__: {};
};


// add a new property:
obj.prototype.drive = function () {
	console.log(`Drive`);
}

// create new prototype
obj.prototype = {
	drive: function () {
		console.log(`drive`);
	}
}

