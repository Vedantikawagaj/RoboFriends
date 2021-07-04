import React from 'react';

const Card =(props) =>{
    return(
        <div className = 'bg-light-pink tc pa3 br3 dib ma2 grow bw2 shawdow-10'>
            <img src={`https://robohash.org/${props.id}?size=200x200`}  alt="robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
            
        </div>
    )
}

export default Card

