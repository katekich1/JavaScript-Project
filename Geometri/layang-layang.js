function calculateKite() {
  const d1 = parseFloat(document.getElementById('d1').value);
  const d2 = parseFloat(document.getElementById('d2').value);
  const area = 0.5 * d1 * d2;
  // Asumsi sisi-sisi sama panjang
  const side = Math.sqrt(Math.pow(d1 / 2, 2) + Math.pow(d2 / 2, 2));
  const perimeter = 4 * side;
  document.getElementById('kiteResult').textContent = `Luas: ${area.toFixed(2)}, Keliling: ${perimeter.toFixed(2)}`;
}
