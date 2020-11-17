var colors = ["red", "green", "blue"];
var box = document.querySelector('.box');
console.log(box)

function changeBG(color){
    box.style.background = color;
}

// iep: can we escape creating a useless function (even more - why in array?) as we call it immediately
// let arr = [];

for (var i = 0; i < colors.length; i++) {
    ( function(j) {
        setTimeout(() => {
            console.log(`set:${j}`);
            changeBG(colors[j]);
        }, 1000*i)
    })(i);
};

// console.log( arr );
// undefined | functions | string |


// (function(){})()
// let foo = function(){}();











