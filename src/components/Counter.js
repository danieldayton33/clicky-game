import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <div className='score'> {props.score}</div>
            <div className='high-score'> {props.highScore}</div>
        </div>
        
    );
}

export default Counter;