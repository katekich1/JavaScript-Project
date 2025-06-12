function calculateCircle() {
  const radius = parseFloat(document.getElementById('radius').value);
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  document.getElementById('circleResult').textContent = `Luas: ${area.toFixed(2)}, Keliling: ${circumference.toFixed(2)}`;
}
