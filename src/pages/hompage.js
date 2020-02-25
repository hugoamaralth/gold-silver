import React from 'react';
import Slider from "react-slick";
import SliderAnimated from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/homepage.css';

import ProductShowcase from '../components/product-showcase';
import CategoryBanner from '../components/category-banner';

import { allProducts } from '../main/tempData';

export default class HomePage extends React.Component {
    makeProducts(amount){
        let ret = [];
        let productsNews = allProducts(amount);
        for(let prod in productsNews){
            let p = productsNews[prod];
            ret.push(<ProductShowcase prod={p} key={p.id} handlerAddToBasket={this.handlerAddToBasket} />);
        }
        return ret;
    }
    render(){
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
        
        const slidersConfig = {
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 3,
            arrows: true,
            responsive: [
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 1,
                    arrows: true
                  }
                },
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 2,
                      arrows: true
                    }
                  },
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 1525,
                    settings: {
                      slidesToShow: 4,
                    }
                  }
            ]
        };

        return (
            <div className="home-page">
                <SliderAnimated autoplay={false} infinite={true}>
                    {slides.map((slide, index) => 
                        <div key={index} className={`banner-top-home-${index+1}`}>
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
                        {this.makeProducts(5)}
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
                    {this.makeProducts(5)}
                    </Slider>
                </section>
            </div>
        )
    }
}