//the RegEx to find if the userEmail contains '@' symbol:
// <some symbols, at least 1: a-zA-Z0-9_.->@<some lower letters>.<some lower letters{1-3}>;

let userMails = [
	"progressbg.www.courses@gmail.com", // valid
	"progressbg.www.courses@gmail.coms", // invalid
	"progressbg-www@gmail.com", // valid
	"@gmail.com", // invalid
	"*progressbg*@gmail.com", // invalid
	"progressbg@com", // invalid
]

let userMails = [
	.forEach(str => {
	if(re.test(str)){
		console.log(`OK`);
	}else{
		console.log(`NO`);
	}
});