document.getElementById('colorPicker').addEventListener('input', (e) => {
  strokeColor = e.target.value;
  fillColor = e.target.value;
});

document.getElementById('strokeWidth').addEventListener('input', (e) => {
  strokeWidth = e.target.value;
});

document.getElementById('ddaButton').addEventListener('click', () => {
  setActiveButton('ddaButton');
  tool = 'dda';
});
document.getElementById('bresenhamButton').addEventListener('click', () => {
  setActiveButton('bresenhamButton');
  tool = 'bresenham';
});
document.getElementById('circleButton').addEventListener('click', () => {
  setActiveButton('circleButton');
  tool = 'circle';
});
document.getElementById('ellipseButton').addEventListener('click', () => {
  setActiveButton('ellipseButton');
  tool = 'ellipse';
});
document.getElementById('clearButton').addEventListener('click', () => {
  lines = [];
  circles = [];
  ellipses = [];
  context.clearRect(0, 0, canvas.width, canvas.height);
});
document.getElementById('translateButton').addEventListener('click', () => {
  let transX = parseInt(document.getElementById('transX').value);
  let transY = parseInt(document.getElementById('transY').value);
  translateShapes(transX, transY);
});
document.getElementById('scaleButton').addEventListener('click', () => {
  let scaleFactor = parseFloat(document.getElementById('scaleFactor').value);
  scaleShapes(scaleFactor);
});
document.getElementById('rotateButton').addEventListener('click', () => {
  let rotateAngle = parseFloat(document.getElementById('rotateAngle').value);
  rotateShapes(rotateAngle);
});
document.getElementById('mirrorButton').addEventListener('click', () => {
  let axis = document.getElementById('mirrorAxis').value;
  mirrorShapes(axis);
});
document.getElementById('fillButton').addEventListener('click', () => {
  setActiveButton('fillButton');
  tool = 'fill';
});

function setActiveButton(buttonId) {
  document.querySelectorAll('#toolbar button').forEach(button => {
      button.classList.remove('active');
  });
  document.getElementById(buttonId).classList.add('active');
}

// Canvas event listeners
canvas.addEventListener('mousedown', (e) => {
  startX = e.offsetX;
  startY = e.offsetY;
  if (tool === 'fill') {
      floodFill(startX, startY, hexToRgb(fillColor));
  } else {
      drawing = true;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      redrawCanvas();
      if (tool === 'dda') {
          drawLineDDA(startX, startY, e.offsetX, e.offsetY, strokeColor, strokeWidth);
      } else if (tool === 'bresenham') {
          drawLineBresenham(startX, startY, e.offsetX, e.offsetY, strokeColor, strokeWidth);
      } else if (tool === 'circle') {
          let radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
          drawCircleMidpoint(startX, startY, radius, strokeColor, null, strokeWidth);
      } else if (tool === 'ellipse') {
          let rx = Math.abs(e.offsetX - startX);
          let ry = Math.abs(e.offsetY - startY);
          drawEllipseMidpoint(startX, startY, rx, ry, strokeColor, null, strokeWidth);
      }
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (drawing) {
      drawing = false;
      if (tool === 'dda') {
          lines.push({ startX, startY, endX: e.offsetX, endY: e.offsetY, algorithm: 'dda', strokeColor: strokeColor, strokeWidth: strokeWidth });
      } else if (tool === 'bresenham') {
          lines.push({ startX, startY, endX: e.offsetX, endY: e.offsetY, algorithm: 'bresenham', strokeColor: strokeColor, strokeWidth: strokeWidth });
      } else if (tool === 'circle') {
          let radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
          circles.push({ startX, startY, radius, strokeColor: strokeColor, fillColor: fillColor, strokeWidth: strokeWidth });
      } else if (tool === 'ellipse') {
          let rx = Math.abs(e.offsetX - startX);
          let ry = Math.abs(e.offsetY - startY);
          ellipses.push({ startX, startY, rx, ry, strokeColor: strokeColor, fillColor: fillColor, strokeWidth: strokeWidth });
      }
      redrawCanvas();
  }
});
