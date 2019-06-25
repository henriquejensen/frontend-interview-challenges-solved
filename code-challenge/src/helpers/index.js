import { RED_CIRCLE_DIAMETER } from '../../src/constants';

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

export function areaParalellogram(p1, p2, p3) {
    const base = distanceVertices(p1, p2);
    const height = distanceVertices(p2, p3);
    const area = base * height;
    return area;
}

export function distanceVertices(point1, point2) {
    const calcX = Math.pow(point2.x - point1.x, 2);
    const calcY = Math.pow(point2.y - point1.y, 2);
    const distance = Math.sqrt(calcX + calcY);
    return distance
}

export function diameterCircunference(area) {
    const diameter = Math.sqrt(area / Math.PI);
    return diameter;
}

export function circleCenter(point1, point3) {
    return medianPoint(point1, point3);
}

export function isPointSelected(pointX, pointY, arrayPoints) {
    const verifyXorY = (vertice, point) => vertice - RED_CIRCLE_DIAMETER <= point && point <= vertice + RED_CIRCLE_DIAMETER;
    const verify = (x, y) => verifyXorY(x, pointX) && verifyXorY(y, pointY);
    const pointSelected = arrayPoints.findIndex(({ x, y }) => verify(x,y))
    return pointSelected;
}