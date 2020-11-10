// let obj1 = {a:1, b:2};
// copy by reference (RAM adresses)
// let obj2 = obj1;

// obj1.a = 9;

// console.log( obj2.a);

// Copy objects by Object.asign():
// let obj1 = {a:1, b:2};

// // copy by reference (RAM adresses)
// let obj2 = Object.assign({},obj1);
// console.dir(obj2);


// Object.assign creates Shallow copies!!!
let p1 = {
	name: 'Pesho',
	address: {
		town: 'Sofia',
		zip: 1504,
	}
}
let backup = Object.assign({},p1);
// backup.name = p1.name
// backup.address = p1.address


p1.name = 'Maria';
console.log( backup.name ); // Pesho

//// here we change the object in p1.address, and that change will reflect the backup as well
p1.address.town = "Plovdiv"
console.log( backup.address.town ); // "Plovdiv"

// p1.address = 0; // here we do not change the object in p1.address ,we just re-assign the value in p1.address
console.log( backup.address ); //






