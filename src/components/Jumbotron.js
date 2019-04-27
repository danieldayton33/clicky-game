import React from 'react';
import Container from './Container';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <Container>
        <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </div> 
    );
}

export default Jumbotron;