import { parallelogram } from '../../src/components/parallelogram';
import { findParallelogramPoint4 } from '../../src/helpers';

export function parallelogramController(ctx, points) {

    const [ point1, point2, point3 ] = points;

    parallelogram({
        ctx,
        point1,
        point2,
        point3,
        point4: findParallelogramPoint4(points)
    });
}

