function calculateSquare() {
  const side = parseFloat(document.getElementById('side').value);
  const area = side * side;
  const perimeter = 4 * side;
  document.getElementById('squareResult').textContent = `Luas: ${area}, Keliling: ${perimeter}`;
}
