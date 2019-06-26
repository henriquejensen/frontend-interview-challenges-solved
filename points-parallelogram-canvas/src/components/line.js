function line(context, start, end) {
    context.beginPath();    
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
}

export function blueLine(context, start, end) {
    line(context, start, end);
    context.strokeStyle = 'blue';
    context.stroke();
}