function calculateRectangle() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const area = length * width;
  const perimeter = 2 * (length + width);
  document.getElementById('result').textContent = `Luas: ${area}, Keliling: ${perimeter}`;
}
