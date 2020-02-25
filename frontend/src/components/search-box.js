import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../components/icon-button';

import '../styles/search-box.css';

export default () => (
    <div className="search-box">  
        <input type="text" className="search" placeholder="O que você procura?" />
        <IconButton cls="search-button" icon={faSearch} onClick={()=>{}} />
    </div>
)