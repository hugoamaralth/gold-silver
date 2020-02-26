import React from 'react';
import '../styles/list-of-filters.css';

function makeList(props){
    let ret = [];
    props.data.forEach((item, k) => {
        ret.push(
            <li key={k} dataid={item.name} onClick={props.onClick} className={item.sel ? "selected" : ''}>
                <span dataid={item.name}>{item.name}</span> 
                <span className="amount" dataid={item.name}>{item.amount}</span>
            </li>);
    });
    return ret;
}

export default props => {
    return (
        <div className="list-of-filters">
            <h4>{props.title}</h4>
            <ul>
                {makeList(props)}
            </ul>
        </div>
    )
}