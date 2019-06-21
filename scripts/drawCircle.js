function drawCircle(context, posX, posY) {
    context.beginPath();
    context.arc(posX, posY, CIRCLE_DIAMETER, 0, 2 * Math.PI);
    context.strokeStyle = 'red';
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}