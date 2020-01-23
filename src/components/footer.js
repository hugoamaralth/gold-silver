import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faStore, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import '../styles/footer.css';

export default () => (
    <footer className="footer-site">
        <nav>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faStore} /> Vitrine
                </li>
                <li>
                    <FontAwesomeIcon icon={faBuilding} /> Sobre nós
                </li>
                <li>
                <FontAwesomeIcon icon={faDollarSign} /> Como pagar
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} /> Contato
                </li>
            </ul>
        </nav>
        <div>
            Elétrica Gold & Silver 2020 &copy;<br />
            Todos os direitos reservados.
        </div>
    </footer>
);