import React from 'react';

import SearchBox from '../components/search-box';

export default () => (
    <header className="header-site-mobile">
        <div className='top-mobile'>
            <div>
                <img src={require('../assets/images/logo.png')} className="logo" />
            </div>
            <SearchBox  />
        </div>
        
    </header>
)