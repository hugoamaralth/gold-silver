import React from 'react';
import { Redirect } from 'react-router';
import '../styles/search-box.css';

export default class SearchBox extends React.Component {
    state = {
        text: '',
        go: false
    }
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.handlerKeyDown = this.handlerKeyDown.bind(this);
    }
    search() {
        console.log(this.state.text)
    }
    handlerOnChange(evt) {
        this.setState({
            ...this.state,
            text: evt.target.value
        });
    }
    async handlerKeyDown(e){
        if (e.key === 'Enter') {
            await this.setState({
                ...this.state,
                go: true
            });
            this.setState({
                ...this.state,
                go: false
            });
        }
      }
    render() {
        if(this.state.go) {
            return <Redirect push to={`/buscar?t=${this.state.text}`} />
        };
        return (<div className="search-box">
            <input type="text" className="search" placeholder="pesquisar" onKeyDown={this.handlerKeyDown} value={this.state.text} onChange={this.handlerOnChange} />
        </div>)
    }
}