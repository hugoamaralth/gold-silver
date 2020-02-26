import React, { Component } from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: this.props.valueInput || '',
            name: this.props.name
        }
    }

    changeValue(e) {
        this.setState({
            ...this.state,
            valueInput: e.target.value
        })
        // console.log(this.state.value)

    }

    updateState(){
         this.setState({
            ...this.state,
            valueInput: this.props.valueInput || '',
            name: this.props.name
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.valueInput !== this.state.valueInput) {
          this.setState({ valueInput: nextProps.valueInput });
        }
      }

    render() {
        return (
            <div className="form-group px-2 h-100">
                <label htmlFor={this.props.id} className="text-primary">{this.props.name}</label>
                <input type="text" placeholder={this.props.placeholder} id={this.props.id} className={"form-control mb-3"} onChange={e => this.changeValue(e)} value={this.state.valueInput || ""} />
            </div>
        )

    }
}  
