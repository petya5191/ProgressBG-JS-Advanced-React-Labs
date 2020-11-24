let str = 'aA bc a dsA dsjks';
str = str.replace(/a/gi,'$');

console.log( str );
// $ bc $ dsA dsjks