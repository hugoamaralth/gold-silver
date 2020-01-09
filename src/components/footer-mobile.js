import React from 'react';
import { faShoppingBasket, faUserCircle, faTasks } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../components/icon-button';
import ButtonMenuMobile from '../components/button-menu-mobile';

export default class FooterMobile extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
       return (
           <div className="footer-mobile">
                <IconButton cls="" icon={faUserCircle} onClick={()=>{}} />
                <IconButton cls="" icon={faTasks} onClick={()=>{}} /> 
                <IconButton cls="" icon={faShoppingBasket} onClick={()=>{}} /> 
                <ButtonMenuMobile onClick={this.props.openCloseMenu} cls={this.props.menuOpened ? 'change' : ''} />
            </div>
       )
    }
}