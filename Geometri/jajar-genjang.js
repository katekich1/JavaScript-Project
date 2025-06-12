function calculateParallelogram() {
  const base = parseFloat(document.getElementById('baseParallelogram').value);
  const height = parseFloat(document.getElementById('heightParallelogram').value);
  const area = base * height;
  const perimeter = 2 * (base + height);
  document.getElementById('parallelogramResult').textContent = `Luas: ${area}, Keliling: ${perimeter}`;
}
