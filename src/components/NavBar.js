import React from 'react';



const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-xl sticky-top navbar-light bg-dark">
            <div className="score-area">Score: {props.score}</div>
            <div className="logo" >
                <img src="./images/b7c243ffdd6bd65c0fe0f6fde12848d1.png" style={{height:50, width: 700}}alt="logo" />
            </div>
            <div className="high-score-area">High Score: {props.highScore}</div>
        </nav>
    );
}

export default NavBar;