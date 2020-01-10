import React from 'react';

import SearchBox from '../components/search-box';
import Logo from '../components/logo';

export default () => (
    <header className="header-site-mobile">
        <div className='top-mobile'>
            <div>
                <Logo />
            </div>
            <SearchBox  />
        </div>
        
    </header>
)