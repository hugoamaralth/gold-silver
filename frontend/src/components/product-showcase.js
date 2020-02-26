import React from 'react';
import { Link } from "react-router-dom";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/product-showcase.css';

export default (props) => {
    return (
        <div className="item-showcase">
            <img src={props.prod.image} />
            <h4>
                {props.prod.name.trim()}
                <span>
                    {props.prod.marca.trim()}
                </span>
            </h4>
            <div className="product-description">
                <p>
                    {props.prod.description.substr(0, 180) + ((props.prod.description.length > 180) ? '...' : '')}
                </p>
                <span className="price">
                    {props.prod.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </span>
                <Link to={`/produto/${props.prod._id}`}>
                    <button>
                        Ver produto
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </Link>
            </div>
        </div>
    );
}