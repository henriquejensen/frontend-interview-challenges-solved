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

function areaParalellogram(p1, p2, p3) {
    const baseHeight = distanceVertices(p1, p2) * distanceVertices(p2, p3)
    const area = baseHeight / 2;
    return area;
}

function distanceVertices(point1, point2) {
    const calcX = Math.pow(point2.x - point1.x, 2);
    const calcY = Math.pow(point2.y - point1.y, 2);
    const distance = Math.sqrt(calcX + calcY);
    return distance
}

function diameterCircunference(area) {
    const diameter = Math.sqrt(area / Math.PI);
    return diameter;
}