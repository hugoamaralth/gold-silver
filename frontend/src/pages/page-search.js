import React from 'react';
import BtnTextIcon from '../components/icon-text-button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/page-search.css';
import ListOfFilters from '../components/list-of-filters';
import { productListFilter } from '../main/server-requests';
import ProductShowcase from '../components/product-showcase';

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

    constructor(props) {
        super(props);
        this.clearFilters = this.clearFilters.bind(this);
        this.filterByBrand = this.filterByBrand.bind(this);
    }

    componentDidMount() {
        this.updateStates();
    }

    async clearFilters() {
        await this.setState({
            ...this.setState,
            selectedFilters: {
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
            console.log(data)
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

        })
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
                        <h2>{this.state.amount > 0 ? this.state.amount + " produtos encontrados" : "Nenenhum produto encontrado. Limpe os filtros e refaça sua busca" }</h2>
                        <div className="cards">
                            {this.makeProducts()}
                        </div>
                    </div>
                </div>
                <div className={'loader' + ((this.state.isLoading) ? ' active' : '')}>
                    <div>
                        carregando
                    </div>
                </div>
            </div>
        )
    }
}