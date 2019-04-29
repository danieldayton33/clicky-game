import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-xl sticky-top navbar-light bg-dark">
            <div className="score-area">Score: {props.score}</div>
            <div className="logo" >
                <img src="./images/e17d761fb238051d8f362859373756a3.png" style={{height:50, width: 700}}alt="logo" />
            </div>
            <Container>
                <Row>
                <Col size={"sm-12"}>
                <div className="high-score-area">High Score: {props.highScore}</div>
                </Col>
                </Row>
                <Row>
                <Col size={"sm-12"}>
                <div className="status">
                {(props.mistakeMade === false) ? ("Guess. No Matches!") : ("Wrong! Try Again!")}
                </div> 
                </Col>
                
                </Row>
            </Container>
            
        </nav>
    );
}

export default NavBar;