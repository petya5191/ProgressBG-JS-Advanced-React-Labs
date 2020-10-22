// let str = 'ajdkjkdbjdfkdc';
// console.log( str[0] );
// console.log( str[str.length-1] );

// Task: define function isPalindrom(), which returns true id the given string is Palndrom. Else => return false
function isPalindrom(str) {
	for (let i = 0; i < str.length; i++) {
		// i = 1, str[1] => a,
		if (str[i] === str[ (str.length-1)-i]) {
			continue;
		}else{
			console.log(`false`);
			return;
		}
	}
	console.log(`true`);
}
// positive case:
isPalindrom('madam'); // true
isPalindrom('madsam'); // false
isPalindrom('oto');  // true
isPalindrom('otro');  // false

