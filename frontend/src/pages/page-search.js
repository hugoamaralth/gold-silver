import React from 'react';
import BtnTextIcon from '../components/icon-text-button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/page-search.css';
import SearchBox from '../components/search-box';
import ListOfFilters from '../components/list-of-filters';
import { productListFilter } from '../main/server-requests';

export default class Search extends React.Component {
    state = {
        filterByBrand: [],
        filterByCategory: []
    };
    constructor(props) {
        super(props);
        this.clearFilters = this.clearFilters.bind(this);
        this.filterByBrand = this.filterByBrand.bind(this);

        this.updateStates();
    }

    clearFilters() {
        //clear filters
    }

    filterByBrand() {

    }

    makeProducts() {

    }

    updateStates(data) {
        productListFilter({
            dataSearch: true
        }).then(data => {
            let filterByBrand = [];
            for (let b in data.brands) {
                filterByBrand.push({
                    name: b,
                    amount: data.brands[b]
                });
            }
            let filterByCategory = [];
            console.log(data)
            for (let b in data.categories) {
                filterByCategory.push({
                    name: b,
                    amount: data.categories[b]
                });
            }
            this.setState({
                ...this.state,
                filterByBrand,
                filterByCategory
            });
        })
    }

    render() {
        return (
            <div className="search-page">
                <div className="breadcrumb">
                    Home > Filtrar
                </div>
                <div className="content">
                    <div className="sideBar">
                        <BtnTextIcon text="Limpar filtros" cls="clear-filters" icon={faTrash} onClick={this.clearFilters} />
                        <SearchBox />
                        <div className="filter-by-price">
                            <h4>Filtrar por preço</h4>
                            <div className="price-inputs">
                                <div>
                                    <sup>mínimo</sup>
                                    <input type="number" placeholder=" - " />
                                </div>
                                <div>
                                    <sup>máximo</sup>
                                    <input type="number" placeholder=" - " />
                                </div>
                            </div>
                        </div>
                        <ListOfFilters title="Filtrar por marca" data={this.state.filterByBrand} selected={null} onClick={() => { this.filterByBrand(this) }} />
                        <ListOfFilters title="Filtrar por categoria" data={this.state.filterByCategory} selected={null} onClick={() => { this.filterByBrand(this) }} />
                    </div>
                    <div className="products">
                        {this.makeProducts()}
                    </div>
                </div>
            </div>
        )
    }
}