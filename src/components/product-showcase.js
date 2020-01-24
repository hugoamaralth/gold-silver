import React from 'react';


export default (props) => {
    return (
    <div className={props.cls}>
        <img src={props.image} />
        <h4>
            {props.name}
            <span>
                {props.marca}
            </span>
        </h4>
        <div className="product-description">
            <span className="price">
                {props.price ? <span><span>R$</span> {props.price}</span> : <span><span>Consulte-nos</span></span>}
            </span>
            {props.description}
        </div>
    </div>
);}