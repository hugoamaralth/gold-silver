import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props)=>(
    <button className={props.cls}>
        <FontAwesomeIcon icon={props.icon} onClick={props.onClick} />
    </button>
)