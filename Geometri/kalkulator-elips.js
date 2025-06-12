function calculateEllipse() {
  const a = parseFloat(document.getElementById('axisX').value);
  const b = parseFloat(document.getElementById('axisY').value);
  const area = Math.PI * a * b;
  // Approximation Ramanujan untuk keliling elips
  const h = Math.pow(a - b, 2) / Math.pow(a + b, 2);
  const circumference = Math.PI * (a + b) * (1 + (3*h)/(10 + Math.sqrt(4 - 3*h)));

  document.getElementById('ellipseResult').textContent =
    `Luas: ${area.toFixed(2)}, Keliling ≈ ${circumference.toFixed(2)}`;

  drawEllipse(a, b);
}

function drawEllipse(a, b) {
  const canvas = document.getElementById('ellipseCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.ellipse(canvas.width/2, canvas.height/2, a, b, 0, 0, 2*Math.PI);
  ctx.stroke();
}
