import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/category-banner.css';

export default (props) => (
    <div className="category-banner">
        <img src={props.image} />
        <div className="mask" style={{backgroundColor: "#"+props.color}}></div>
        <h2>{props.text}</h2>
        <button>Ver Produtos <FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
);