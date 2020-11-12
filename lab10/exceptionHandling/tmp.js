// let x = -5;
// let y = 0;


// if(y === 0){
// 	throw new Error('Division by Zero!')
// }

// let res = x/y;

// if( res > 0 ){ //
// 	console.log(`Positive`);
// }else{
// 	console.log(`Negative`);
// }

try{
    x = 2;
    console.log(`x=${x}`);
}catch(err){
    console.error(`Error: ${err.message}`);
}
