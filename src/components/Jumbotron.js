import React from 'react';
import Container from './Container';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <Container>
        <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </div> 
    );
}

export default Jumbotron;