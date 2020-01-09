import React from 'react';
import HomePage from '../pages/hompage';
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
                <HomePage />
                <FooterMobile openCloseMenu={this.openCloseMenu} menuOpened={this.state.menuOpened} />
                <Footer />
                <Menu opened={this.state.menuOpened} />
            </div>
            )
    }
}