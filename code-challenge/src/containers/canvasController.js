import { redCircle } from '../../src/components/circle';
import { parallelogram } from '../../src/components/parallelogram';
import { NUMBER_OF_POINTS } from '../../src/constants';
import { findParallelogramPoint4 } from '../../src/helpers';

const points = [];

export default function canvasController(ctx, event) {

    const { clientX, clientY } = event;
    points.push({ x: clientX, y: clientY });

    if (points.length <= NUMBER_OF_POINTS) {
        redCircle(ctx, clientX, clientY);
    }

    if (points.length === NUMBER_OF_POINTS) {
        parallelogram({
            ctx,
            point1: points[0],
            point2: points[1],
            point3: points[2],
            point4: findParallelogramPoint4(points)
        })
    }
       
}