import React from 'react';
import "./styles/card.css"

const Cards = ({ Locations }) => {
    return (
        <div className='blocCards'>
            <li className='card'>
                <img 
                    src="{Locations.cover.jpg} "
                    alt={"Photo de la location"} />
                <div className="infos">
                    <h3>"é"</h3>
                </div>
            </li>
        </div>
    );
};


export default Cards;