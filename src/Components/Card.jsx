import React from 'react';
import "../Components/styles/card.css"
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return (
        <NavLink to={`/apartment/${props.id}`}  className="appartement">
            <img className="img" src={props.image} alt={props.title} />
            <div className="title-appartment">{props.title}</div>
        </NavLink>
    );
};

export default Card;
