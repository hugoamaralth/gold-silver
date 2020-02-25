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
        return (
                <button className="btn-add-to-cart" onClick={() => { 
                    this.canClick = false;
                    this.changeText();
                }}>
                    <span className="price">
                        <span>R$</span>{this.props.prod.price.split(',')[0]}<span>,{this.props.prod.price.split(',')[1]}</span>
                    </span>
                    <span>
                        {this.state.txt}
                        <FontAwesomeIcon icon={this.state.icon} />
                    </span>
                </button>
        )
    }
}