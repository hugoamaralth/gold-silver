import React from 'react';
import BtnTextIcon from '../components/icon-text-button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/page-search.css';
import ListOfFilters from '../components/list-of-filters';
import { productListFilter } from '../main/server-requests';
import ProductShowcase from '../components/product-showcase';
import Loader from '../components/loader';

export default class Search extends React.Component {
    state = {
        isLoading: false,
        filterByBrand: [],
        filterByCategory: [],
        products: [],
        amount: 0,
        pricesLimits: {
            min: 0,
            max: 0
        },
        selectedFilters: {
            sort: this.initialOrder,
            text: '',
            brand: null,
            categorie: null,
            prices: {
                min: 0,
                max: 0
            }
        }
    };
    getDataTimeout = null;
    getDataTimeoutMS = 2000;

    smallVariables = {
        text: 't',
        sort: 's',
        brand: 'b',
        categorie: 'c',
        pricesMin: 'pi',
        pricesMax: 'pa'
    }

    initialOrder = "name";

    constructor(props) {
        super(props);
        this.clearFilters = this.clearFilters.bind(this);
        this.filterByBrand = this.filterByBrand.bind(this);
        this.handlerChangeSort = this.handlerChangeSort.bind(this);
    }

    async componentDidMount() {
        await this.checkUrlVars();
        this.updateStates();
    }

    async checkUrlVars() {
        const varsOnUrl = window.location.search.replace('?', '').split('&');
        let selectedFilters = {
            text: '',
            brand: null,
            sort: this.initialOrder,
            categorie: null,
            prices: {
                min: 0,
                max: 0
            }
        }
        varsOnUrl.map(v => {
            if (v.length === 0) return;
            v = v.split('=');
            if (v[0] === 'pi') {
                selectedFilters.prices.min = v[1];
                return;
            }
            if (v[0] === 'pa') {
                selectedFilters.prices.max = v[1];
                return;
            }
            selectedFilters[this.getVariableBySmall(v[0])] = v[1];
        });
        await this.setState({
            ...this.state,
            selectedFilters
        })
    }

    getVariableBySmall(small) {
        return Object.keys(this.smallVariables).find(key => this.smallVariables[key] === small);
    }

    async clearFilters() {
        await this.setState({
            ...this.setState,
            selectedFilters: {
                sort: this.initialOrder,
                text: '',
                brand: null,
                categorie: null,
                prices: {
                    min: 0,
                    max: 0
                }
            }
        });
        this.updateStates()
    }

    async filterByBrand(evt) {
        await this.setState({
            ...this.state,
            selectedFilters: {
                ...this.state.selectedFilters,
                brand: evt.target.getAttribute('dataid')
            }
        });
        this.updateStates();
    }

    async filterByCategorie(evt) {
        await this.setState({
            ...this.state,
            selectedFilters: {
                ...this.state.selectedFilters,
                categorie: evt.target.getAttribute('dataid')
            }
        });
        this.updateStates();
    }

    makeProducts() {
        let ret = [];
        const products = this.state.products;
        for (const prod in products) {
            const p = products[prod];
            ret.push(<ProductShowcase prod={p} key={p._id} handlerAddToBasket={this.handlerAddToBasket} />);
        }
        return ret;
    }

    getAllFilters() {
        let ret = {};
        for (let f in this.state.selectedFilters) {
            const filter = this.state.selectedFilters[f];
            switch (f) {
                case "brand": ret.marca = (filter === null) ? null : filter;
                    break;
                case "categorie": ret.category = (filter === null) ? null : filter;
                    break;
                case "prices": ret.prices = { min: this.state.selectedFilters.prices.min, max: this.state.selectedFilters.prices.max };
                    break;
                case "text": ret.name = filter;
                    break;
                case "sort": ret.sort = filter;
                    break;
                default:
                    break;
            }
        }
        return ret;
    }

    async updateStates() {
        let filters = this.getAllFilters();

        this.setState({
            ...this.state,
            isLoading: true
        })
        productListFilter({
            dataSearch: true,
            filters
        }).then(data => {
            let filterByBrand = [];
            for (let b in data.brands) {
                filterByBrand.push({
                    name: b,
                    amount: data.brands[b]
                });
            }
            let filterByCategory = [];
            for (let b in data.categories) {
                filterByCategory.push({
                    name: b,
                    amount: data.categories[b]
                });
            }
            this.setState({
                ...this.state,
                isLoading: false,
                products: data.results,
                amount: data.amount,
                filterByBrand,
                filterByCategory,
                pricesLimits: data.prices,
                selectedFilters: {
                    ...this.state.selectedFilters,
                    prices: data.prices
                }
            });
            this.uptadeUrlVars();
        })
    }

    uptadeUrlVars() {
        let url = '';
        const filters = this.state.selectedFilters;
        for (const filter in filters) {
            if (filters[filter] !== null) {
                if (filter === "prices") {
                    url += `&pi=${filters[filter].min}`;
                    url += `&pa=${filters[filter].max}`;
                    continue;
                }
                url += `&${this.smallVariables[filter]}=${filters[filter]}`;
            }
        }
        window.history.pushState("", "", '/buscar?' + url);
    }


    handlerOnlyNumber = (text, field) => {
        clearTimeout(this.getDataTimeout);
        const num = parseInt(text.target.value);
        if (/^\d+$/.test(num)) {
            this.setState({
                ...this.state,
                selectedFilters: {
                    ...this.state.selectedFilters,
                    prices: {
                        ...this.state.selectedFilters.prices,
                        [field]: num
                    }
                }
            });
            this.getDataTimeout = setTimeout(() => {
                this.updateStates();
            }, this.getDataTimeoutMS);
        }
    }

    async handlerChangeSort(evt) {
        await this.setState({
            ...this.state,
            selectedFilters: {
                ...this.state.selectedFilters,
                sort: evt.target.value
            }
        });
        this.updateStates();
    }

    handlerChangeText(evt) {
        clearTimeout(this.getDataTimeout);
        const txt = evt.target.value;
        this.setState({
            ...this.state,
            selectedFilters: {
                ...this.state.selectedFilters,
                text: txt
            }
        });
        this.getDataTimeout = setTimeout(() => {
            this.updateStates();
        }, this.getDataTimeoutMS);
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
                        <input type="text" placeholder="pesquise pelo nome" className="search-text" value={this.state.selectedFilters.text} onChange={(evt) => {
                            this.handlerChangeText(evt)
                        }
                        } />
                        <div className="filter-by-price">
                            <h4>Filtrar por preço</h4>
                            <div className="price-inputs">
                                <div>
                                    <sup>mínimo R$</sup>
                                    <input type="text" placeholder={this.state.selectedFilters.prices.min} value={this.state.selectedFilters.prices.min} onChange={(evt) => {
                                        this.handlerOnlyNumber(evt, "min")
                                    }
                                    } />
                                </div>
                                <div>
                                    <sup>máximo R$</sup>
                                    <input type="text" placeholder={this.state.selectedFilters.prices.max} value={this.state.selectedFilters.prices.max} onChange={(evt) => {
                                        this.handlerOnlyNumber(evt, "max")
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                        <ListOfFilters title="Filtrar por marca" data={this.state.filterByBrand} onClick={(evt) => { this.filterByBrand(evt) }} />
                        <ListOfFilters title="Filtrar por categoria" data={this.state.filterByCategory} onClick={(evt) => { this.filterByCategorie(evt) }} />
                    </div>
                    <div className="products">
                        <div className="header">
                            <h2>{this.state.amount > 0 ? this.state.amount + " produtos encontrados" : "Nenenhum produto encontrado. Limpe os filtros e refaça sua busca"}</h2>
                            <div className="sort-select">
                                Ordernar produtos por:
                                <select onChange={this.handlerChangeSort} value={this.state.selectedFilters.sort}>
                                    <option value="name">Nome</option>
                                    <option value="-marca">Marca</option>
                                    <option value="category">Categoria</option>
                                    <option value="price">Preço (menor para maior)</option>
                                    <option value="-price">Preço (maior para menor)</option>
                                </select>
                            </div>
                        </div>
                        <div className="cards">
                            {this.makeProducts()}
                        </div>
                    </div>
                </div>
                <Loader isLoading={this.state.isLoading} />
            </div>
        )
    }
}