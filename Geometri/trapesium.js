function calculateTrapezoid() {
  const topBase = parseFloat(document.getElementById('topBase').value);
  const bottomBase = parseFloat(document.getElementById('bottomBase').value);
  const height = parseFloat(document.getElementById('heightTrapezoid').value);
  const area = 0.5 * (topBase + bottomBase) * height;
  // Asumsi sisi miring sama panjang
  const side = Math.sqrt(Math.pow((bottomBase - topBase) / 2, 2) + Math.pow(height, 2));
  const perimeter = topBase + bottomBase + 2 * side;
  document.getElementById('trapezoidResult').textContent = `Luas: ${area.toFixed(2)}, Keliling: ${perimeter.toFixed(2)}`;
}
