import React from 'react';

function Card(props) {
    return (
        <div className={props.shake === false ? (" image-div ") : (" image-div shake")} style={{width: "18rem"}}>
            <img src={props.src} className="card-img-top" id={props.id} alt="pic-card" 
            style={{borderRadius: "50%"}} 
            onClick={()=>props.handleClick(props.id, props.index)} />
           
        </div>
    );
}

export default Card;