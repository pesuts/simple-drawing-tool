function drawLineDDA(x1, y1, x2, y2, strokeColor, strokeWidth) {
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.beginPath();
  let dx = x2 - x1;
  let dy = y2 - y1;
  let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
  
  let xIncrement = dx / steps;
  let yIncrement = dy / steps;
  
  let x = x1;
  let y = y1;
  
  context.moveTo(x, y);
  for (let i = 0; i <= steps; i++) {
      context.lineTo(Math.round(x), Math.round(y));
      x += xIncrement;
      y += yIncrement;
  }
  context.stroke();
}

function drawLineBresenham(x1, y1, x2, y2, strokeColor, strokeWidth) {
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.beginPath();
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let sx = (x1 < x2) ? 1 : -1;
  let sy = (y1 < y2) ? 1 : -1;
  let err = dx - dy;

  context.moveTo(x1, y1);
  while (true) {
      context.lineTo(x1, y1);
      if ((x1 === x2) && (y1 === y2)) break;
      let e2 = 2 * err;
      if (e2 > -dy) {
          err -= dy;
          x1 += sx;
      }
      if (e2 < dx) {
          err += dx;
          y1 += sy;
      }
  }
  context.stroke();
}

function drawCircleMidpoint(xc, yc, radius, strokeColor, fillColor = null, strokeWidth) {
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  
  if (fillColor) {
      context.fillStyle = fillColor;
  } else {
      context.fillStyle = "#000000"; // Default color
  }
  context.beginPath();
  context.arc(xc, yc, radius, 0, 2 * Math.PI);
  let x = radius;
  let y = 0;
  let p = 1 - radius;

  while (x > y) {
      context.fillRect(xc + x, yc + y, 1, 1);
      context.fillRect(xc - x, yc + y, 1, 1);
      context.fillRect(xc + x, yc - y, 1, 1);
      context.fillRect(xc - x, yc - y, 1, 1);
      context.fillRect(xc + y, yc + x, 1, 1);
      context.fillRect(xc - y, yc + x, 1, 1);
      context.fillRect(xc + y, yc - x, 1, 1);
      context.fillRect(xc - y, yc - x, 1, 1);

      y++;
      if (p <= 0) {
          p = p + 2 * y + 1;
      } else {
          x--;
          p = p + 2 * y - 2 * x + 1;
      }
  }
  context.stroke();
  
}

function drawEllipseMidpoint(xc, yc, rx, ry, strokeColor, fillColor = null, strokeWidth) {
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  
  if (fillColor) {
      context.fillStyle = fillColor;
  } else {
      context.fillStyle = "#000000"; // Default color
  }
  context.beginPath();
  context.ellipse(xc, yc, rx, ry, 0, 0, 2 * Math.PI);
  let rxSq = rx * rx;
  let rySq = ry * ry;
  let x = 0;
  let y = ry;
  let p1 = rySq - (rxSq * ry) + (0.25 * rxSq);
  let dx = 2 * rySq * x;
  let dy = 2 * rxSq * y;

  while (dx < dy) {
      context.fillRect(xc + x, yc + y, 1, 1);
      context.fillRect(xc - x, yc + y, 1, 1);
      context.fillRect(xc + x, yc - y, 1, 1);
      context.fillRect(xc - x, yc - y, 1, 1);
      if (p1 < 0) {
          x++;
          dx = dx + (2 * rySq);
          p1 = p1 + dx + rySq;
      } else {
          x++;
          y--;
          dx = dx + (2 * rySq);
          dy = dy - (2 * rxSq);
          p1 = p1 + dx - dy + rySq;
      }
  }

  let p2 = (rySq) * ((x + 0.5) * (x + 0.5)) + (rxSq) * ((y - 1) * (y - 1)) - (rxSq * rySq);

  while (y >= 0) {
      context.fillRect(xc + x, yc + y, 1, 1);
      context.fillRect(xc - x, yc + y, 1, 1);
      context.fillRect(xc + x, yc - y, 1, 1);
      context.fillRect(xc - x, yc - y, 1, 1);
      if (p2 > 0) {
          y--;
          dy = dy - (2 * rxSq);
          p2 = p2 + rxSq - dy;
      } else {
          y--;
          x++;
          dx = dx + (2 * rySq);
          dy = dy - (2 * rxSq);
          p2 = p2 + dx - dy + rxSq;
      }
  }
  context.stroke();
}
