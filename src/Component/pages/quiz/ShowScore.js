import React from 'react';
import './showScore.css';

const STYLES = ['score--main'];//just defining an score--main, so that if other score screens or styles are needed can be implemented.
export const ShowmyScore = ({
    score,//takes in an score variable
    totalScore,//takes total score to display
    name,
    styles//takes in an style value, or sets the first style in the array, using the function checkStlye
}) => {
    const checkStlye = STYLES.includes(styles) ? styles : STYLES[0];
    return (
            <div className={`score ${checkStlye}`}>
                <h1>{name} scored {score} out of {totalScore}</h1> {/* just prints how much you scored */}
            </div>
    );
};
