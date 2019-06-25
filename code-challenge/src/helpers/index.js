export function findParallelogramPoint4([point1, point2, point3]) {
    return newVertice(medianPoint(point1, point3), point2);
}

function medianPoint(start, end) {
    const x = (end.x + start.x) / 2;
    const y = (end.y + start.y) / 2;
    return { x, y };
}

function newVertice(medianPoint, end) {
    const x = (medianPoint.x * 2) - end.x;
    const y = (medianPoint.y * 2) - end.y;
    return { x, y };
}