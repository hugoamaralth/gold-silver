import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import '../styles/btn-add-to-cart.css';

export default props => (
    <button className="btn-add-to-cart">
        <span className="price">
            <span>R$</span>{props.price.split(',')[0]}<span>,{props.price.split(',')[1]}</span>
        </span>
        <span>
            Adicionar à cesta
            <FontAwesomeIcon icon={faShoppingBasket} /> 
        </span>
    </button>
)