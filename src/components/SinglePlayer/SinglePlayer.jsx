// import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = (props) => {

    // eslint-disable-next-line react/prop-types
    const{id,name,image, club, country,price} = props.player;



    return (
        <div>
            <div className="players">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>Player Code: {id}</p>
                <p>Club: {club}</p>
                <p>Country: {country}</p>
                <p>Price: {price}</p>
                <button> Buy {name}</button>
            </div>      
        </div>
    );
};

export default SinglePlayer;