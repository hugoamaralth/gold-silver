import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/btn-add-to-cart.css';


export default class BtnCart extends React.Component  {

    canClick = true;
    
    constructor(props){
        super(props);
        this.changeText = this.changeText.bind(this);
        this.state = {
            txt: "Adicionar à cesta",
            icon: faShoppingBasket
        }
    }

    changeText(){
        let bkp = this.state;
        this.setState({
            txt: 'Adicionado!',
            icon: faThumbsUp
        });

        setTimeout(()=>{
            this.setState({
                ...bkp
            }); 
            this.props.handlerAddToBasket(this.props.prod);
        },1000);

    }

    render(){
        let price = this.props.prod.price.toLocaleString('pt-br',{minimumFractionDigits:2});
        return (
                <button className="btn-add-to-cart" onClick={() => { 
                    this.canClick = false;
                    this.changeText();
                }}>
                    <span className="price">
                        <span>R$</span>{price.split(',')[0]}<span>,{price.split(',')[1]}</span>
                    </span>
                    <span>
                        {this.state.txt}
                        <FontAwesomeIcon icon={this.state.icon} />
                    </span>
                </button>
        )
    }
}