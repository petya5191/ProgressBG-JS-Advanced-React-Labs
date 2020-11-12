var email = 'namedomain.com';
try {
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error) {
        console.error(`Anticipated: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch(err) {
    console.error(`Unanticipated: ${err.message}`);
}

function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`);
}


// let res;
// if(a){
// 	res =  b;
// }else{
// 	res = c
// }
// let res = a ? b:c