let users = [
	"Ivan Ivanov",
	"1 Ivan Ivanov",
	"Ada Byron",
	"1as Byron"
];

let newUsers = [];

// TODO: send as HW
users.forEach( user=>{
		newUsers.push(user.replace(/^([a-zA-Z]+)\s[a-zA-Z]+$/, '$1'.toUpperCase() ));
	}
)

console.log( newUsers );
// "Ivan",
// "ADA BYRON",
// "1as Byron"




