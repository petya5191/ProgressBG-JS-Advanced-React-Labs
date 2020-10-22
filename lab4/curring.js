const sum = function(x){
    return function(y){
        return x+y;
    }
}

// let res = sum(2);
// console.log( res(3) );

console.log( sum(2)(3) );

