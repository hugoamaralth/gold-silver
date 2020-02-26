import React from "react";
import { listarProdutos } from "../serverRequests";
import {Link} from "react-router-dom";

function Linha(props) {

    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.category}</td>
            <td> <Link to={`/produtos/edit/${props._id}`} className="bg-primary" > <button className="btn bg-primary text-light btn-icon-spli">Editar <i className="fas fa-edit text-light"></i></button> </Link></td>
        </tr>
    )
}

export default class ListaProdutos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dataProdutos: [],
        }
    }

    //exemplo de como pegar os dados
    componentDidMount(){
        
       this.getData();
       this.makeTable()
    //    console.log(this.state.dataProdutos)
    }

    getData() {
        let dataResp =[];
        listarProdutos().then(data => {
            data.map(
                e => dataResp.push(e)
            )
            this.setState({
                ...this.state,
                dataProdutos: dataResp})
            
        });
        
    }


    //crie um componente pras linhas, criei esse básico no mesmo arquivo, mas separe ;)


    makeTable() {

        let {dataProdutos} = this.state;
        let ret= [];
        dataProdutos.map(
            (e,i)=> ret.push(<Linha name={e.name} price={e.price} _id={e._id} key={i} category={e.category}/>)
        )
        // ret.push(<this.Linha name={i.nome} price={i.price} _id={i._id} key={i} />)
        // ds
        return (
            <tbody id="table-body">
                {ret}
            </tbody>
        );
    }
    render() {

        return (
            <div className="container-fluid">

                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a href="https://datatables.net">official DataTables documentation</a>.</p>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Preço</th>
                                        <th>Categoria</th>
                                        <th>Editar</th>
                                    </tr>
                                </thead>


                                    {this.makeTable()}

                            </table>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
