import React from "react";
import Input from "../Input"
import { saveProduct } from '../serverRequests'
export default class NovoProduto extends React.Component {
    state = {
        produtoDetalhes: {}
    }
    
    constructor(props) {
        super(props);
        this.handlerOnInputChange = this.handlerOnInputChange.bind(this);
    }


    handlerOnInputChange(pars) {
        let { produtoDetalhes } = this.state;
        let ret = {}
        ret.name = pars.key === "name" ? pars.value : produtoDetalhes.name;
        ret.price = pars.key === "price" ? pars.value : produtoDetalhes.price;
        ret.category = pars.key === "category" ? pars.value : produtoDetalhes.category;
        ret.marca = pars.key === "marca" ? pars.value : produtoDetalhes.marca;
        ret.description = pars.key === "description" ? pars.value : produtoDetalhes.description;

        this.setState({
            produtoDetalhes: {
                ...this.state.produtoDetalhes,
                ...ret
            }
        })
    }
    async salvarProduto() {
        const produtosConfig = {
            name: this.state.produtoDetalhes.name,
            price: this.state.produtoDetalhes.price,
            category: this.state.produtoDetalhes.category,
            marca: this.state.produtoDetalhes.marca,
            description: this.state.produtoDetalhes.description,
            image: 'images/products/no-image.png'
        }
        await saveProduct(produtosConfig);
        console.log('foi')
    }

    render() {
        return (
            <div className="container-fluid ">
                <form action="" className="my-5">
                    <div className="form-group">
                        <Input reff="name" name="Nome" placeholder="Insira o nome do produto" icon="file-signature" onChange={this.handlerOnInputChange} valueInput={this.state.produtoDetalhes.name} typeInput="text"/>
                        <Input reff="price" name="Preço" placeholder="Insira o preço do produto" icon="dollar-sign" onChange={this.handlerOnInputChange} valueInput={this.state.produtoDetalhes.price} typeInput="number"/>
                        <Input reff="category" name="Categoria" placeholder="Insira a categoria do produto" icon="align-center" onChange={this.handlerOnInputChange} valueInput={this.state.produtoDetalhes.category} typeInput="text"/>
                        <Input reff="marca" name="Marca" placeholder="Insira a marca do produto" icon="copyright" onChange={this.handlerOnInputChange} valueInput={this.state.produtoDetalhes.marca} typeInput="text"/>
                        <Input reff="description" name="Descrição" placeholder="Insira descrição do produto" icon="exclamation" onChange={this.handlerOnInputChange} valueInput={this.state.produtoDetalhes.description} typeInput="text"/>
                    </div>

                    <div className="form-group">
                        <div className="form-group ml-2">
                            <label htmlFor="image" className="text-primary">Adicionar novas imagens</label>
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
                            <div className="bg-primary p-2 btn " id="salvar" onClick={()=> this.salvarProduto()}>
                                <span className="btn btn-primary h-100 w-100 btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check text-light"></i>
                                    </span>
                                    <span className="text text-light">Salvar</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
