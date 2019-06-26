import React from 'react';
import './button.css';

export default function Button({
    children,
    onClick
}) {
    return (
        <button id='myButton' onClick={onClick}>
            {children}
        </button>
    );
}