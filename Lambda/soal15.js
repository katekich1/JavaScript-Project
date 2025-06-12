const faktorial = n => n <= 1 ? 1 : n * faktorial(n - 1);
console.log(faktorial(5)); // Output: 120