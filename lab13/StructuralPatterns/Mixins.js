class Mixin1{
	method1(){
		console.log(`I'm method1 from M1`);
	}

	method2(){
		console.log(`I'm method2 from M1`);
	}
}

class Mixin2{
	method3(){
		console.log(`I'm method3 from M2`);
	}
}

// multiple inheritence in classic OOOP....
// class MixinUser extends (Mixin1,Mixin2){

// }

class MixinUser{}
// TODO: update slides with this demo: finish copy the needed Mixin Methods into MixinUser's object


// test
let mixinUserObject = new MixinUser();
mixinUserObject.method1(); // I'm F1 from M1
mixinUserObject.method3(); // I'm F1 from M1
