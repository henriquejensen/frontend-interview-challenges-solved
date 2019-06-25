import { redCircle, yellowCircle } from '../../src/components/circle';
import { parallelogram } from '../../src/components/parallelogram';
import { NUMBER_OF_POINTS } from '../../src/constants';
import {
    findParallelogramPoint4,
    circleCenter,
    areaParalellogram,
    diameterCircunference
 } from '../../src/helpers';

export function mouseDown(ctx, points) {

    points.map(({ x, y }) => redCircle(ctx, x, y));

    let [ point1, point2, point3 ] = points;

    if (points.length === NUMBER_OF_POINTS) {
        parallelogram({
            ctx,
            point1,
            point2,
            point3,
            point4: findParallelogramPoint4(points)
        });

        const center = circleCenter(point1, point3);
        const paralellogramArea = areaParalellogram(point1, point2, point3);
        const circleDiameter = diameterCircunference(paralellogramArea);

        yellowCircle(ctx, center.x, center.y, circleDiameter)
    }
}

