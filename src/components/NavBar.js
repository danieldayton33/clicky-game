import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';

const NavBar = ({score, mistakeMade, highScore}) => {
    return (
        <nav className="navbar navbar-expand-xl sticky-top navbar-light bg-dark">
            <div className={(mistakeMade === false) ? ("score-area") : ("score-area shake")}>Score: {score}</div>
            <div className="logo" >
                <img src="./images/e17d761fb238051d8f362859373756a3.png" style={{height:50, width: 700}}alt="logo" />
            </div>
            <Container>
                <Row>
                <Col size={"sm-12"}>
                <div className="high-score-area">High Score: {highScore}</div>
                </Col>
                </Row>
                <Row>
                <Col size={"sm-12"}>
                {(mistakeMade === false) ? 
                   ( <div className="status">Guess. No Matches!</div> ) 
                   :
                    (<div className="status shake">Wrong! Try Again!</div> )}
                </Col>
                
                </Row>
            </Container>
            
        </nav>
    );
}

export default NavBar;