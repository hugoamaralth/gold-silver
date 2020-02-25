import React from 'react';
import { Link } from "react-router-dom";

import BtnCart from './btn-add-to-cart';
import '../styles/product-showcase.css';

export default (props) => {
    return (
    <Link to={`/produto/${props.prod.id}`}>
        <div className="item-showcase">
            <img src={props.prod.image} />
            <h4>
                {props.prod.name}
                <span>
                    {props.prod.marca}
                </span>
            </h4>
            <div className="product-description">
                <p>
                    {props.prod.description.substr(0, 180) + ((props.prod.description.length > 180) ? '...' : '')}
                </p>
                <button>Ver produto</button>
            </div>
        </div>
    </Link>
);}