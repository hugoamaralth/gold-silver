import React from 'react';
import ImageGallery from 'react-image-gallery';
import BtnCart from '../components/btn-add-to-cart';
import Slider from "react-slick";
import { slidersConfig } from '../core/configSliders';
import ProductShowcase from '../components/product-showcase';
import { productById, productListFilter } from '../main/server-requests';
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/page-product.css';

class ProductPage extends React.Component {
    state = {
        prod: {
            productPictures: [],
            price: '00,00',
            image: ''
        },
        relatedProds: []
    };

    id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            id: this.id
        })
        this.getDatas();
    }

    componentWillReceiveProps() {
        this.getDatas();
    }

    getProdImages() {
        let productPictures = []
        this.state.prod.image = this.state.prod.image.split("../").join("");
        if (this.state.prod.othersImages == undefined) {
            productPictures.push({
                original: `../${this.state.prod.image}`,
                thumbnail: `../${this.state.prod.image}`
            });
        } else {
            for (let i = 0; i <= this.state.prod.othersImages; i++) {
                if (i === 0) {
                    productPictures.push({
                        original: `../${this.state.prod.image}`,
                        thumbnail: `../${this.state.prod.image}`
                    });
                } else {
                    let img = this.state.prod.image.split('.');
                    img = img[0] + '_' + (i + 1) + '.' + img[1];
                    productPictures.push({
                        original: `../${img}`,
                        thumbnail: `../${img}`
                    })
                }
            }
        }
        this.setState({
            ...this.state,
            prod : {
                ...this.state.prod,
                productPictures
            }
        })
    }

    getDatas() {
        const id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        productById(id).then(data => {
            this.setState({
                ...this.state,
                prod: {
                    ...data,
                    productPictures: []
                }
            })
        })
        .then(()=>{
            this.getProdImages();
        })
        .then(() => {
            productListFilter({
                category: this.state.prod.category,
                shuffle: true
            }).then(data => {
                this.setState({
                    ...this.state,
                    relatedProds: data
                })
            })
        })
    }

    makeProducts() {
        let ret = [];
        for (let prod in this.state.relatedProds) {
            let p = this.state.relatedProds[prod];
            p.image = `../${p.image}`
            ret.push(<ProductShowcase prod={p} key={p._id} />);
        }
        return ret;
    }

    render() {

        return (
            <div className="product-page">
                <div className="breadcrumb">
                    Home > {this.state.prod.category} > {this.state.prod.marca}
                </div>
                <div className="content-product">
                    <div className="product-photo">
                        <ImageGallery items={this.state.prod.productPictures} showPlayButton={false} />
                    </div>
                    <div className="product-description-page">
                        <h1>
                            {this.state.prod.name} <span>{this.state.prod.marca}</span>
                        </h1>
                        <BtnCart prod={this.state.prod} handlerAddToBasket={this.props.handlerAddToBasket} />
                        <p>{this.state.prod.description}</p>
                    </div>
                </div>
                <div className="relatedProducts">
                    <h3>Produtos relacionados</h3>
                    <Slider {...slidersConfig}>
                        {this.makeProducts(4)}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default ProductPage;