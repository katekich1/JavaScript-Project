function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


console.log(validateEmail('contoh@email.com')); 
console.log(validateEmail('email-tidak-valid')); 