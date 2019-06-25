import { RED_CIRCLE_DIAMETER } from '../../src/constants';

function circle(context, posX, posY, diameter) {
    context.beginPath();
    context.arc(posX, posY, diameter, 0, 2 * Math.PI);
}

export function redCircle(ctx, posX, posY) {
    circle(ctx, posX, posY, RED_CIRCLE_DIAMETER);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

export function yellowCircle(ctx, posX, posY, diameter) {
    circle(ctx, posX, posY, diameter);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
}