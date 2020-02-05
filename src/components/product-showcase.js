import React from 'react';
import { Link } from "react-router-dom";

import BtnCart from './btn-add-to-cart';
import '../styles/product-showcase.css';

export default (props) => {
    return (
    <Link to={`/produto/${props.id}`}>
        <div className="item-showcase">
            <img src={props.image} />
            <h4>
                {props.name}
                <span>
                    {props.marca}
                </span>
            </h4>
            <div className="product-description">
                <p>
                    {props.description}
                </p>
                <BtnCart price={props.price} />
            </div>
        </div>
    </Link>
);}