import React from "react";
// import { withRouter } from "react-router";
import { produtoPorId, updateProduct } from "../serverRequests";
import Input from "../Input";

export default class Edit extends React.Component {
    url = "http://192.168.1.7:3000/";
    id = this.props.match.params.id;
    state = {
        produtoDetalhes: {
            name: ''
        },
    }

    constructor(props) {
        super(props);
        this.getData();
        this.makingImages = this.makingImages.bind(this);
        this.handlerOnInputChange = this.handlerOnInputChange.bind(this)
        //console.log(this.state.objetoSalvar)
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

    salvarProduto() {
        const produtosConfig = {
            name: this.state.produtoDetalhes.name,
            price: this.state.produtoDetalhes.price,
            category: this.state.produtoDetalhes.category,
            marca: this.state.produtoDetalhes.marca,
            description: this.state.produtoDetalhes.description,
        }
        updateProduct(this.id, produtosConfig);
    }

    handlerOnInputChange(pars) {
        let { produtoDetalhes } = this.state;
        let ret = {}
        ret.name = pars.key === "name" ? pars.value : produtoDetalhes.name;
        ret.price = pars.key === "price" ? pars.value : produtoDetalhes.price;
        ret.category = pars.key === "category" ? pars.value : produtoDetalhes.category;
        ret.marca = pars.key === "marca" ? pars.value : produtoDetalhes.marca;
        ret.description = pars.key === "description" ? pars.value : produtoDetalhes.description;

        this.setState({produtoDetalhes: {
            ...this.state.produtoDetalhes,
            ...ret
        }})   
    }

    makingImages(e) {
        // if(e === 0) return;
        const { produtoDetalhes } = this.state;
        let ret = [];
        ret.push(
            <div className="h-100 w-25 m-0 " key={0}>
                <img src={`${this.url}${produtoDetalhes.image}`} className="h-100 w-100" alt="" />
            </div>
        )
        for (let i = 0; i < produtoDetalhes.othersImages; i++) {
            let img = produtoDetalhes.image.split(".")
            img = img[0] + '_' + (i + 2) + '.' + img[1];
            ret.push(
                <div className="w-25 border" key={i + 1}>
                    <img src={`${this.url}${img}`} className="h-100 w-100" alt="" />
                </div>
            )
        }
        return ret;
    }


    render() {
        return (
            <div className="container-fluid m-0 p-0 " >

                <div className="container my-5">
                    <form >
                        <div className="form-group">
                            <Input reff="name" valueInput={this.state.produtoDetalhes.name} onChange={this.handlerOnInputChange} name="Nome" icon="file-signature" typeInput="text" />
                            <Input reff="price" valueInput={this.state.produtoDetalhes.price} onChange={this.handlerOnInputChange} name="Preço" icon="dollar-sign" typeInput="number"/>
                            <Input reff="category" valueInput={this.state.produtoDetalhes.category} onChange={this.handlerOnInputChange} name="Categoria" icon="align-center" typeInput="text"/>
                            <Input reff="marca" valueInput={this.state.produtoDetalhes.marca} onChange={this.handlerOnInputChange} name="Marca" icon="copyright" typeInput="text"/>
                            <Input reff="description" valueInput={this.state.produtoDetalhes.description} onChange={this.handlerOnInputChange} name="Descrição" icon="exclamation"typeInput="text" />
                        </div>
                        <div className="form-group ml-2">
                            
                            <div className="w-100 d-flex border">
                                {this.makingImages()}

                            </div>
                        </div>
                        <div className="form-group ml-2">
                            <label htmlFor="image" className="text-primary">Adicionar nova imagem</label>
                            <p className="text-muted"> EM BREVE!</p>
                            <div>
                                <input type="file" className="file-path validate btn btn-primary" id="image" disabled/>
                            </div>
                        </div>

                        <div className="form-group d-flex justify-content-between p-0">
                            <div className="bg-warning p-2 btn" id="salvar">
                                <span className="btn  btn-warning h-100 w-100 btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-long-arrow-alt-left text-light"></i>
                                    </span>
                                    <span className="text text-light">Voltar</span>
                                </span>
                            </div>
                            <div className="bg-danger p-2 btn mx-2" id="salvar">
                                <span className="btn  btn-danger h-100 w-100 btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-trash text-light"></i>
                                    </span>
                                    <span className="text text-light">Excluir</span>
                                </span>
                            </div>
                            <div className="bg-primary p-2 btn " id="salvar" onClick={() => this.salvarProduto()}>
                                <span className="btn btn-primary h-100 w-100 btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check text-light"></i>
                                    </span>
                                    <span className="text text-light">Salvar</span>
                                </span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}