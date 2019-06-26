import { redCircle } from '../components/circle';

export function pointsController(ctx, points) {

    points.map(({ x, y }) => redCircle(ctx, x, y));
}

