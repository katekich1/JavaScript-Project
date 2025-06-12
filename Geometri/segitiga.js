function calculateTriangle() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  const area = 0.5 * base * height;
  // Asumsi segitiga sama sisi untuk keliling
  const perimeter = 3 * base;
  document.getElementById('triangleResult').textContent = `Luas: ${area}, Keliling: ${perimeter}`;
}
