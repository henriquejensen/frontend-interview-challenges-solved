import React from 'react';
import { floatFixed } from '../../../src/helpers';

import './panel.css';

export default function Panel({
    point1 = '',
    point2 = '',
    point3 = '',
    parallelogramArea,
    circleArea
}) {

    return (
        <div id='panel-container'>
            <h2>Coordinates</h2>
            <p>Point1 => x: {point1.x} y: {point1.y}</p>
            <p>Point2 => x: {point2.x} y: {point2.y}</p>
            <p>Point3 => x: {point3.x} y: {point3.y}</p>
            <p>Area Parallelogram => {parallelogramArea && floatFixed(parallelogramArea)}</p>
            <p>Area Circle => {circleArea && floatFixed(circleArea)}</p>
        </div>
    );
}