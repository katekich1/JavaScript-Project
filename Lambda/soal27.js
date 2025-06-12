const isKabisat = tahun => (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
console.log(isKabisat(2020)); // Output: true