import React from 'react';
import { Route, Switch} from "react-router-dom";

import HomePage from '../pages/hompage';
import Product from '../pages/product';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterMobile from '../components/footer-mobile';
import Menu from '../components/menu';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.openCloseMenu = this.openCloseMenu.bind(this);
        this.state = {
            menuOpened : false
        }
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
                        <Route exact path='/' component={HomePage} />
                        <Route path='/produto/:id' component={Product} />
                    </Switch>
                </div>
                    {/* <HomePage /> */}

                <FooterMobile openCloseMenu={this.openCloseMenu} menuOpened={this.state.menuOpened} />
                <Footer />
                <Menu opened={this.state.menuOpened} />
            </div>
            )
    }
}