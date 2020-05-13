import React from 'react';

function Card(props) {
    return (
        <div className={props.shake === false ? (" image-div ") : (" image-div shake")}>
            <img src={props.src} className="card-img-top" id={props.id} alt="pic-card"
            onClick={()=>props.handleClick(props.id, props.index)} />
           
        </div>
    );
}

export default Card;