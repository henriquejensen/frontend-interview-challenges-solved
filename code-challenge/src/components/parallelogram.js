import { blueLine } from '../../src/components/line';

export function parallelogram({ ctx, point1, point2, point3, point4 }) {
    blueLine(ctx, point1, point2);
    blueLine(ctx, point2, point3);
    blueLine(ctx, point3, point4);
    blueLine(ctx, point4, point1);
}

