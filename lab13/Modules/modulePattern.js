const myModule = (function(){
	// private
	const config = {
		encoding: 'UTF8',
		maxLength: '2048'
	};

	const logDateTime = function () {
		return new Date();
	}


	// API
	const showConfig =  function(){
		for( key in config ){
			console.log(`${key}: ${config[key]}`)
		}
	}
	const changeConfig =  function(key, value){
		config[key] = value;
		console.log(`Configed changed at: ${logDateTime()}`);
	}

	return {
		// from ES6 (Shorthand property names)
		showConfig,
		changeConfig
	}
})();

myModule.showConfig();
myModule.changeConfig("maxLength",1024 );
myModule.showConfig();