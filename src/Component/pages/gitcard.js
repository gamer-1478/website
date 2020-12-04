import React from 'react';
import './gitcard.css';

export const Button = ({
    children,
    onClick
}) => {
    return (
        <button
            className={`crd crd--square crd--large`}
            onClick={onClick}
        >{children}
        </button>
    );
};