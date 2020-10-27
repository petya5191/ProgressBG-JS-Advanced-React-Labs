function factoriel(n) {
	if(n>1){
		return n*factoriel(n-1);
	}else{
		return 1;
	}
}


console.log( factoriel(3) );
//  factoriel(3) =
//  3*factoriel(2) = 6
//  2*factorial(1) = 2
//  factorial(1) = 1