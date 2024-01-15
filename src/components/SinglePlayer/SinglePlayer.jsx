// import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = (props) => {

    // eslint-disable-next-line react/prop-types
    const{id,name} = props.player;



    return (
        <div>

            <h1>Player Name : {name}</h1>
            <h1>Player Name : {id}</h1>
            
        </div>
    );
};

export default SinglePlayer;