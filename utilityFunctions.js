function floodFill(x, y, fillColor) {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    let targetColor = getColorAtPixel(data, x, y);

    if (colorsMatch(targetColor, fillColor)) {
        return;
    }

    let stack = [[x, y]];

    while (stack.length) {
        let [currentX, currentY] = stack.pop();
        let currentPos = (currentY * canvas.width + currentX) * 4;

        if (!colorsMatch(getColorAtPixel(data, currentX, currentY), targetColor)) {
            continue;
        }

        setColorAtPixel(data, currentX, currentY, fillColor);

        if (currentX + 1 < canvas.width) stack.push([currentX + 1, currentY]);
        if (currentX - 1 >= 0) stack.push([currentX - 1, currentY]);
        if (currentY + 1 < canvas.height) stack.push([currentX, currentY + 1]);
        if (currentY - 1 >= 0) stack.push([currentX, currentY - 1]);
    }

    context.putImageData(imageData, 0, 0);
}

function getColorAtPixel(data, x, y) {
    let pos = (y * canvas.width + x) * 4;
    return [data[pos], data[pos + 1], data[pos + 2], data[pos + 3]];
}

function setColorAtPixel(data, x, y, color) {
    let pos = (y * canvas.width + x) * 4;
    data[pos] = color[0];
    data[pos + 1] = color[1];
    data[pos + 2] = color[2];
    data[pos + 3] = 255;
}

function colorsMatch(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b, 255];
}

function isPointInCircle(x, y, cx, cy, radius) {
    let dx = x - cx;
    let dy = y - cy;
    return dx * dx + dy * dy <= radius * radius;
}

function isPointInEllipse(x, y, cx, cy, rx, ry) {
    let dx = (x - cx) / rx;
    let dy = (y - cy) / ry;
    return dx * dx + dy * dy <= 1;
}

function setActiveButton(buttonId) {
    document.querySelectorAll('#toolbar button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

// Set default active button
setActiveButton('ddaButton');
