import React from 'react';
import Slider from "react-slick";
import SliderAnimated from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/page-homepage.css';
import { productList } from '../main/server-requests';
import ProductShowcase from '../components/product-showcase';
import CategoryBanner from '../components/category-banner';
import { slidersConfig } from '../core/configSliders';

export default class HomePage extends React.Component {
    state = {
        producsNews: {
            data: [],
            limit: 11
        },
        producsBestSellers: {
            data: [],
            limit: 11
        }
    };
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.getProducts();
    }
    makeProducts(region) {
        let ret = [];
        const products = this.state[region].data;
        for (const prod in products) {
            const p = products[prod];
            ret.push(<ProductShowcase prod={p} key={p._id} handlerAddToBasket={this.handlerAddToBasket} />);
        }
        return ret;
    }

    getProducts() {
        productList(this.state.producsNews.limit).then((data) => {
            this.setState({
                ...this.state,
                producsNews: {
                    ...this.state.producsNews,
                    data: data
                },
            })
        });

        productList(this.state.producsBestSellers.limit).then((data) => {
            this.setState({
                ...this.state,
                producsBestSellers: {
                    ...this.state.producsBestSellers,
                    data: data
                },
            })
        });
    }

    render() {
        const slides = [
            {
                image: 'banner-1.png',
                text: 'Iluminação em LED | de alta qualidade',
                btnText: 'Ver promoções'
            },
            {
                image: 'banner-2.png',
                text: 'Painéis customizados | de acordo com a sua necessidade',
                btnText: 'Consulte-nos'
            }
        ];
        return (
            <div className="home-page">
                <SliderAnimated autoplay={false} infinite={true}>
                    {slides.map((slide, index) =>
                        <div key={index} className={`banner-top-home-${index + 1}`}>
                            <h4>{slide.text.split('|')[0]}</h4>
                            <h4>{slide.text.split('|')[1]}</h4>
                            <button>
                                {slide.btnText}
                            </button>
                        </div>
                    )}
                </SliderAnimated>

                <section className="news">
                    <h3>Novidades</h3>
                    <Slider {...slidersConfig}>
                        {this.makeProducts('producsNews')}
                    </Slider>
                </section>

                <section className="categories">
                    <CategoryBanner text="Construção e Reforma" color="ffd700" image={require('../assets/images/cat01.jpg')} />
                    <CategoryBanner text="Ferramentas e Acessórios" color="bf0a0a" image={require('../assets/images/cat02.jpg')} />
                    <CategoryBanner text="Iluminação e Decoração" color="ffd700" image={require('../assets/images/cat03.jpg')} />
                    <CategoryBanner text="Infraestrutura " color="bf0a0a" image={require('../assets/images/cat04.jpg')} />
                </section>

                <section className="news">
                    <h3>Mais Vendidos</h3>
                    <Slider {...slidersConfig}>
                        {this.makeProducts('producsBestSellers')}
                    </Slider>
                </section>
            </div>
        )
    }
}