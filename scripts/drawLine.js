function drawLine(context, start, end) {
    context.beginPath();    
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.strokeStyle = 'blue';
    context.stroke();
}