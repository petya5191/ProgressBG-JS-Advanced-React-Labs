const factory = function() {
	return {};
}
const Constructor = function() {

}

const obj1 = factory();
const obj2 = new Constructor();

console.dir(obj1);
console.dir(obj2);