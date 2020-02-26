import React from "react";
// import { withRouter } from "react-router";
import { produtoPorId } from "../serverRequests";
import Input from "../Input"

export default class Edit extends React.Component {
    id = this.props.match.params.id;
    state = {
        produtoDetalhes: {
            name : ''
        },
    }

    constructor(props) {
        super(props);
        this.getData();
    }


    getData() {
        let detalhesResp = {};
        produtoPorId(this.id).then(
            resp => {
                detalhesResp = resp
                this.setState({ produtoDetalhes: detalhesResp })
            }
        );
    }


    render() {
        
        return (
            <div className="container-fluid m-0 p-0 " >

                <div className="container my-5">
                    <form >
                        <Input valueInput={this.state.produtoDetalhes.name} name="Nome" />
                        <Input valueInput={this.state.produtoDetalhes.name} name="Preço" />
                        <Input valueInput={this.state.produtoDetalhes.name} name="Categoria" />
                        <Input valueInput={this.state.produtoDetalhes.name} name="Marca" />
                        <Input valueInput={this.state.produtoDetalhes.name} name="Nome" />
                    </form>

                </div>
            </div>
        )
    }
}