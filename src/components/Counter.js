import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <div className='score'> Score: {props.score}</div>
            <div className='high-score'> HighScore: {props.highScore}</div>
        </div>
        
    );
}

export default Counter;