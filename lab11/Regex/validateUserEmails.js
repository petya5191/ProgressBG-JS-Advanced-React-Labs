//the RegEx to find if the userEmail contains '@' symbol:
// <some symbols, at least 1: a-zA-Z0-9_.- >@<some letters>.<some letters{1-3}>;

let userMails = [
	"progressbg.www.courses@gmail.com", // valid
	"@gmail.com", // invalid
	"*progressbg*@gmail.com", // invalid
	"progressbg@com", // invalid
]