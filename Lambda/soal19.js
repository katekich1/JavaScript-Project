const formatUang = jumlah => `Rp${jumlah.toLocaleString()}`;
console.log(formatUang(1000000)); // Output: Rp1,000,000