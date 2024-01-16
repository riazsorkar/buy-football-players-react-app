import { useState } from 'react';
import './Players.css';
import { useEffect } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

// import React from 'react';

const Players = () => {
    const [Players, setPlayer] = useState([]);
    useEffect( () => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayer(data))
    },[])
    return (
        <div className='container'>
            <div className="players-container">
            {
                Players.map(player => <SinglePlayer 

                    player = {player}
                    key = {player.id}
                
                ></SinglePlayer>
)
            }
            </div>

            <div className="calculation-container">
                
            </div>
            
            
        </div>
    );
};

export default Players;