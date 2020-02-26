import React from "react";
// import { withRouter } from "react-router";
import { produtoPorId } from "../serverRequests";

export default class Edit extends React.Component {
    id = this.props.match.params.id;
    constructor(props) {
        super(props);
        this.state = {
            produtoDetalhes: {
                name:"'",
            },
        }
        this.getData();
    }

    getData() {

        let detalhesResp = {};

        produtoPorId(this.id).then(
            resp => {
                detalhesResp = resp
                this.setState({ produtoDetalhes: detalhesResp })
                console.log(this.state.produtoDetalhes)
            }
        );
    }

    changeValue(e) {
        
        let target = e.target.id;

        this.setState({
            ...this.state,
            produtoDetalhes: {
                ...this.state.produtoDetalhes,
                name: target === "name" ? e.target.value : this.state.produtoDetalhes.name,
                price: target === "price" ? e.target.value :this.state.produtoDetalhes.price,
                category: target === "category" ? e.target.value :this.state.produtoDetalhes.category
            }
        })
        console.log(this.state.produtoDetalhes.name)
    }

    render() {

        return (
            <div className="container-fluid m-0 p-0 " >

                <div className="container my-5">
                    <form >
                        <div className="form-group px-2 h-100">
                            <label htmlFor="name" className="text-primary">Nome</label>
                            <input type="text" className="form-control mb-3" placeholder="Insira o nome..." id="name" value={this.state.produtoDetalhes.name || ""} onChange={e => this.changeValue(e)} />
                        </div>
                        <div className="form-group px-2 h-100">
                            <label htmlFor="price" className="text-primary">Preço</label>
                            <input type="text" className="form-control mb-3 " placeholder="Insira o preço..." id="price" value={this.state.produtoDetalhes.price || ""} onChange={e => this.changeValue(e)} />
                        </div>
                        <div className="form-group px-2 h-100">
                            <label htmlFor="category" className="text-primary">Categoria</label>
                            <input type="text" className="form-control mb-3" placeholder="Insira a categoria..." id="category" value={this.state.produtoDetalhes.category || ""} onChange={e => this.changeValue(e)} />
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}