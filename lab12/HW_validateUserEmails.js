// Define a RegEx, which will implement next rules for valid email:
// <some symbols, at least 1: a-zA-Z0-9_.->@<at least 1 lower letters>.<some lower letters{1-3}>;
// let re = /<YOUR CODE HERE>/



// TESTS:
const userMails = [
	"progressbg.www.courses@gmail.com", // OK
	"progressbg@gmail.coms", // invalid (4 letters for TLD not allowed by our rules)
	"progressbg-www@gmail.com", // OK
	"@gmail.com", // invalid (missing local part, i.e. symbols before '@')
	"*progressbg*@gmail.com", // invalid ('*' in local part is not allowed)
	"progressbg@com", // invalid ('com' is not valid domain name, )
]

userMails.forEach(str => {
	if(re.test(str)){
		console.log(`OK`);
	}else{
		console.log(`NO MATCH`);
	}
});

// EXPECTED OUTPUT:
// OK
// NO MATCH
// OK
// NO MATCH
// NO MATCH
// NO MATCH