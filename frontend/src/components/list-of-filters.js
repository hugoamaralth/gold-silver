import React from 'react';
import '../styles/list-of-filters.css';

function makeList(data){
    let ret = [];
    data.forEach((item, k) => {
        ret.push(<li key={k} className="selected"><span>{item.name}</span> <span className="amount">{item.amount}</span></li>);
    });
    return ret;
}

export default props => {
    return (
        <div className="list-of-filters">
            <h4>{props.title}</h4>
            <ul>
                {makeList(props.data)}
            </ul>
        </div>
    )
}