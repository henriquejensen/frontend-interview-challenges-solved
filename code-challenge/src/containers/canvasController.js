import { redCircle } from '../../src/components/circle';
import { parallelogram } from '../../src/components/parallelogram';
import { NUMBER_OF_POINTS } from '../../src/constants';
import { findParallelogramPoint4 } from '../../src/helpers';

export function mouseDown(ctx, points, clientX, clientY) {

    let [ point1, point2, point3 ] = points;

    if (points.length === NUMBER_OF_POINTS) {
        parallelogram({
            ctx,
            point1,
            point2,
            point3,
            point4: findParallelogramPoint4(points)
        });
    }

    redCircle(ctx, clientX, clientY);
}