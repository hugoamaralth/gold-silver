import React from 'react';
import { faShoppingBasket, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/footer-mobile.css';

import IconButton from '../components/icon-button';
import ButtonMenuMobile from '../components/button-menu-mobile';

export default class FooterMobile extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
       return (
           <div className="footer-mobile">
                <div className="btFoot">
                    <IconButton cls="" icon={faUserCircle} onClick={()=>{}} />
                </div>
                <div className="btFoot">
                    <IconButton cls="" icon={faEnvelope} onClick={()=>{}} /> 
                    <span className="fa-layers-counter">
                        1
                    </span>
                </div>
                <div className="btFoot">
                    <IconButton cls="" icon={faShoppingBasket} onClick={()=>{}} /> 
                    <span className="fa-layers-counter">
                        3
                    </span>
                </div>
                <ButtonMenuMobile onClick={this.props.openCloseMenu} cls={this.props.menuOpened ? 'change' : ''} />
            </div>
       )
    }
}