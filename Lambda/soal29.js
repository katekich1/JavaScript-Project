const isEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(isEmail("test@example.com")); // Output: true