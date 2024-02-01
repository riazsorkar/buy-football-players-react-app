import React from 'react';
import './SinglePlayer.css'
import Players from '../Players/Players';
import Cart from '../Cart/Cart';

const SinglePlayer = (props) => {

    const addToCart =()=> {


        <Cart 
            id={id}
            name ={name}
            image = {image}
            price = {price}

        ></Cart>

        // console.log(image)
        // console.log(name)
        // console.log(country)
        // console.log(price)
    }

    // eslint-disable-next-line react/prop-types
    const{id,name,image, club, country,price} = props.player;
    // console.log(props.player)   



    return (
        <div>
            <div className="players">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>Player Code: {id}</p>
                <p>Club: {club}</p>
                <p>Country: {country}</p>
                <p>Price: {price}</p>
                <button onClick={() => addToCart()}> Buy {name}</button>
            </div>      
        </div>
    );
};

export default SinglePlayer;