import React from 'react';

import SearchBox from '../components/search-box.js';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={`menu ${this.props.opened ? '' : 'closed'}`}>
                <div className="content">
                    <SearchBox />
                </div>
            </div>
        );
    }
}