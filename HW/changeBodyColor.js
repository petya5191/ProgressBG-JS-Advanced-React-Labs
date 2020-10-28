// DOM cache:
const selectColor = document.querySelector('.selectColor');
const btnApplyColor = document.querySelector('.btnApplyColor');

// TASK: define function changeBodyColor()
// which takes 1 parameter: color and changes the body background color with the given one
// Note, that the function will be called as callback, by the addEventListener()

// ---> YOUR CODE HERE <---


// DO NOT CHANGE:
let selectedColor;
selectColor.addEventListener('change', function () {
	selectedColor = selectColor.value;
})

btnApplyColor.addEventListener('click', changeBodyColor(selectedColor) );