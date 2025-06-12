function drawRegularPolygon() {
  const sides = parseInt(document.getElementById('sides').value);
  const size = parseFloat(document.getElementById('size').value);
  const canvas = document.getElementById('canvasPoly');
  const ctx = canvas.getContext('2d');
  const xc = canvas.width / 2;
  const yc = canvas.height / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(xc + size * Math.cos(0), yc + size * Math.sin(0));
  for (let i = 1; i <= sides; i++) {
    const theta = i * 2 * Math.PI / sides;
    ctx.lineTo(xc + size * Math.cos(theta), yc + size * Math.sin(theta));
  }
  ctx.closePath();
  ctx.stroke();
}
