import React from 'react';

export default (props) => (
    <div className={props.cls}>
        <img src={props.image} />
        <h5>{props.name}</h5>
        <div className="product-description">
            {props.description}
            <span className="price">
                {props.price}
            </span>
        </div>
    </div>
);