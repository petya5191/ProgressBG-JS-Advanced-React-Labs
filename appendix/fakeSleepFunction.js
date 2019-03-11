function sleep(ms) {
    let start = now = Date.now();

    while( (now-start) < ms){
      now = Date.now();      
    }
}

setTimeout();

console.log('Start');
sleep(1000);
console.log('End');
