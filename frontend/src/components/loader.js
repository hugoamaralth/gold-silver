import React from 'react';
import '../styles/loader.css';

export default props => (
    <div className={'loader' + ((props.isLoading) ? ' active' : '')}>
        <div>
            carregando
        </div>
    </div>
)