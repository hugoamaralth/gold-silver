import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faUserCircle, faEnvelope, faHome, faFilter, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import SearchBox from '../components/search-box';
import Logo from '../components/logo';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={`menu ${this.props.opened ? '' : 'closed'}`}>
                <div className="content">
                    <Logo />
                    <SearchBox />
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            Home
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFilter} /> 
                            Filtrar produtos
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingBasket} /> 
                            Minha cesta
                            <span className="fa-layers-counter">
                                3
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> 
                            Mensagens
                            <span className="fa-layers-counter">
                                1
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUserCircle} /> 
                            Meu perfil
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSignOutAlt} /> 
                            Sair
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}