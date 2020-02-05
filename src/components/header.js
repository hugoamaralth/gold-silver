import React from 'react';
import { Link } from "react-router-dom";

import SearchBox from '../components/search-box';
import Logo from '../components/logo';

import '../styles/header.css';

export default () => (
    <header className="header-site-mobile">
        <div className='top-mobile'>
            <div>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <SearchBox  />
        </div>
        
    </header>
)