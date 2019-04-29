import React from 'react';

function Card(props) {
    return (
        <div key={props.index} className="image-div" style={{width: "18rem"}}>
            <img src={props.src} className="card-img-top" id={props.id} alt="pic-card" style={{borderRadius: "50%"}}onClick={()=>props.handleClick(props.key)} />
           
        </div>
    );
}

export default Card;