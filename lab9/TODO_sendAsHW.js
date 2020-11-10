var colors = ["red", "green", "blue"];
var box = document.querySelector('.box');

function changeBG(color){
    box.style.background = color;
}


// make it work, without using let/const
for (var i = 0; i < colors.length; i++) {
    setTimeout( ()=>{
        console.log(`i:${i}`);
        changeBG(colors[i]);
    }, 1000*i)
};

console.log(i); // 3


