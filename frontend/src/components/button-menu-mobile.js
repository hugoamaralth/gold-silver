import React from 'react';
import '../styles/button-menu-mobile.css';

export default (props) => (
    <div className={`button-menu-mobile ${props.cls}`} onClick={props.onClick}>
        <div className="bar1 bar"></div>
        <div className="bar2 bar"></div>
        <div className="bar3 bar"></div>
    </div>
)