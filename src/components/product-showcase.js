import React from 'react';

export default (props) => (
    <div className={props.cls}>
        <img src={props.image} />
        <h4>
            {props.name}
            <span>
                {props.sub}
            </span>
        </h4>
        <div className="product-description">
            {props.description}
            <span className="price">
                {props.price ? <span><span>R$</span> {props.price}</span> : <span><span>Consulte-nos</span></span>}
            </span>
        </div>
    </div>
);