import React from 'react';


const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
          <div className="status">
            <h3>{(props.mistakeMade === false) ? ("Guess Another") : ("That was guessed already! Try Again!")}</h3>
          </div> 
      </div> 
    );
}

export default Jumbotron;