let canvas = document.getElementById('drawingCanvas');
let context = canvas.getContext('2d');
let drawing = false;
let startX, startY;
let tool = 'dda'; // Default tool
let lines = [];
let circles = [];
let ellipses = [];
let strokeColor = "#000000"; // Default stroke color
let fillColor = "#000000";   // Default fill color
let strokeWidth = 1; // Default stroke width

function redrawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(line => {
        if (line.algorithm === 'dda') {
            drawLineDDA(line.startX, line.startY, line.endX, line.endY, line.strokeColor, line.strokeWidth);
        } else if (line.algorithm === 'bresenham') {
            drawLineBresenham(line.startX, line.startY, line.endX, line.endY, line.strokeColor, line.strokeWidth);
        }
    });
    circles.forEach(circle => {
        drawCircleMidpoint(circle.startX, circle.startY, circle.radius, circle.strokeColor, circle.fillColor, circle.strokeWidth);
    });
    ellipses.forEach(ellipse => {
        drawEllipseMidpoint(ellipse.startX, ellipse.startY, ellipse.rx, ellipse.ry, ellipse.strokeColor, ellipse.fillColor, ellipse.strokeWidth);
    });
}

// Set active button
function setActiveButton(buttonId) {
    document.querySelectorAll('#toolbar button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

// Set default active button
setActiveButton('ddaButton');
