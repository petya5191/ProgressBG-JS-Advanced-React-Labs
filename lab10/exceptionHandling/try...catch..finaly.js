function foo(x) {
	console.log(x);
}


try{
	foo(3);
}catch(err){
	console.error(err.message);
}finally{
	console.log(`FINALY`);
}

