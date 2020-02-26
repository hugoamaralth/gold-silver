import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
    <button onClick={props.onClick} className={props.cls}>
        <FontAwesomeIcon icon={props.icon} />
        {props.text}
    </button>
)