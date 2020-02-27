import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faUserCircle, faEnvelope, faHome, faFilter, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../styles/menu.css';


import SearchBox from '../components/search-box';
import Logo from '../components/logo';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={`menu ${this.props.opened ? '' : 'closed'}`}>
                <div className="content">
                    <Link to='/' onClick={this.props.openCloseMenu}>
                        <Logo />
                    </Link>
                    <SearchBox />
                    <ul>
                        <li>
                            <Link to='/' onClick={this.props.openCloseMenu}>
                                <FontAwesomeIcon icon={faHome} />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/buscar' onClick={this.props.openCloseMenu}>
                                <FontAwesomeIcon icon={faFilter} />
                                Filtrar produtos
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            Minha cesta
                            <span className="fa-layers-counter">
                                {this.props.basketAmount}
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            Mensagens
                            <span className="fa-layers-counter">
                                0
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