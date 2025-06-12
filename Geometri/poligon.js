function calculatePolygonArea() {
  const input = document.getElementById('coords').value;
  const points = input.split(';').map(s => {
    const [x, y] = s.trim().split(',').map(Number);
    return { x, y };
  });
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    sum += points[i].x * points[j].y - points[j].x * points[i].y;
  }
  const area = Math.abs(sum) / 2;
  document.getElementById('polygonResult').textContent = `Luas poligon: ${area.toFixed(2)}`;
}
