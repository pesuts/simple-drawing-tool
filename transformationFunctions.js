function translateShapes(dx, dy) {
    lines.forEach(line => {
        line.startX += dx;
        line.startY += dy;
        line.endX += dx;
        line.endY += dy;
    });
    circles.forEach(circle => {
        circle.startX += dx;
        circle.startY += dy;
    });
    ellipses.forEach(ellipse => {
        ellipse.startX += dx;
        ellipse.startY += dy;
    });
    redrawCanvas();
}

function scaleShapes(scaleFactor) {
    lines.forEach(line => {
        line.startX = (line.startX - canvas.width / 2) * scaleFactor + canvas.width / 2;
        line.startY = (line.startY - canvas.height / 2) * scaleFactor + canvas.height / 2;
        line.endX = (line.endX - canvas.width / 2) * scaleFactor + canvas.width / 2;
        line.endY = (line.endY - canvas.height / 2) * scaleFactor + canvas.height / 2;
    });
    circles.forEach(circle => {
        circle.startX = (circle.startX - canvas.width / 2) * scaleFactor + canvas.width / 2;
        circle.startY = (circle.startY - canvas.height / 2) * scaleFactor + canvas.height / 2;
        circle.radius *= scaleFactor;
    });
    ellipses.forEach(ellipse => {
        ellipse.startX = (ellipse.startX - canvas.width / 2) * scaleFactor + canvas.width / 2;
        ellipse.startY = (ellipse.startY - canvas.height / 2) * scaleFactor + canvas.height / 2;
        ellipse.rx *= scaleFactor;
        ellipse.ry *= scaleFactor;
    });
    redrawCanvas();
}

function rotateShapes(angle) {
    let radians = (Math.PI / 180) * angle;
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    lines.forEach(line => {
        let startX = line.startX - cx;
        let startY = line.startY - cy;
        let endX = line.endX - cx;
        let endY = line.endY - cy;

        line.startX = cos * startX - sin * startY + cx;
        line.startY = sin * startX + cos * startY + cy;
        line.endX = cos * endX - sin * endY + cx;
        line.endY = sin * endX + cos * endY + cy;
    });

    circles.forEach(circle => {
        let startX = circle.startX - cx;
        let startY = circle.startY - cy;

        circle.startX = cos * startX - sin * startY + cx;
        circle.startY = sin * startX + cos * startY + cy;
    });

    ellipses.forEach(ellipse => {
        let startX = ellipse.startX - cx;
        let startY = ellipse.startY - cy;

        ellipse.startX = cos * startX - sin * startY + cx;
        ellipse.startY = sin * startX + cos * startY + cy;
    });

    redrawCanvas();
}

function mirrorShapes(axis) {
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    if (axis === 'x') {
        lines.forEach(line => {
            line.startY = 2 * cy - line.startY;
            line.endY = 2 * cy - line.endY;
        });
        circles.forEach(circle => {
            circle.startY = 2 * cy - circle.startY;
        });
        ellipses.forEach(ellipse => {
            ellipse.startY = 2 * cy - ellipse.startY;
        });
    } else if (axis === 'y') {
        lines.forEach(line => {
            line.startX = 2 * cx - line.startX;
            line.endX = 2 * cx - line.endX;
        });
        circles.forEach(circle => {
            circle.startX = 2 * cx - circle.startX;
        });
        ellipses.forEach(ellipse => {
            ellipse.startX = 2 * cx - ellipse.startX;
        });
    }

    redrawCanvas();
}
