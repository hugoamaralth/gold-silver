import React from 'react';
import { Route, Switch} from "react-router-dom";

import HomePage from '../pages/hompage';
import Product from '../pages/product';
import Search from '../pages/search';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterMobile from '../components/footer-mobile';
import Menu from '../components/menu';
import ScrollTop from '../core/scrollTop';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.openCloseMenu = this.openCloseMenu.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
        this.state = {
            menuOpened : false,
            basket : []
        }
    }
    removeFromBasket(item){
        let basket = [];
        for(let b in this.state.basket){
            if(this.state.basket[b].id !== item.id){
                basket.push(this.state.basket[b]);
            }
        }
        this.setState({
            ...this.state,
            basket
        });
    }
    addToBasket(item, amount){
        item.amount = amount;
        let basket = this.state.basket;
        basket.push(item);
        this.setState({
            ...this.state,
            basket
        });
    }
    openCloseMenu(){
        this.setState(
            {
                ...this.state,
                menuOpened : !this.state.menuOpened
            }
        );
    }
    render(){
        return(
            <div>
                <Header />

                <div className="pages">
                    <Switch>
                        <Route exact path='/' component={()=>(<HomePage handlerAddToBasket={this.addToBasket} />)} />
                        <Route path='/produto/:id' component={()=>(<Product handlerAddToBasket={this.addToBasket} />)} />
                        <Route path='/buscar' component={()=>(<Search />)} />
                    </Switch>
                </div>

                <FooterMobile openCloseMenu={this.openCloseMenu} menuOpened={this.state.menuOpened} basketAmount={this.state.basket.length} />
                <Footer />
                <Menu opened={this.state.menuOpened} basketAmount={this.state.basket.length} />
                <ScrollTop />
            </div>
            )
    }
}