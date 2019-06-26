import { yellowCircle } from '../components/circle';
import { circleCenter } from '../helpers';

export function circleController(ctx, points, circleDiameter) {

    const point1 = points[0];
    const point3 = points[2];
    const center = circleCenter(point1, point3);

    yellowCircle(ctx, center.x, center.y, circleDiameter);
}

