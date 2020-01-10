import React from 'react';
import Slider from "react-slick";
import SliderAnimated from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import ProductShowcase from '../components/product-showcase';
import CategoryBanner from '../components/category-banner';

export default class HomePage extends React.Component {
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
                    <Slider dots={false} infinite={true} autoplay={false} autoplaySpeed={4000} speed={500} slidesToShow={1} centerMode={true} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item" image={require('../assets/products/product01.jpg')} name="LUXÍMETRO" description="O luxímetro é um aparelho de medição usado para calcular a intensidade de luz de um determinado ponto que contenha lâmpada. Possui visor LCD, luz de fundo para leitura ..." price="260,00" />
                        <ProductShowcase cls="item" image={require('../assets/products/product02.jpg')} name="PLUGUE INDUSTRIAL" description="Plugue industrial, chamado também de plugue Steck, para utilização em diversos equipamentos, tanto para instalações industriais como para comercias. " price="80,00" />
                        <ProductShowcase cls="item" image={require('../assets/products/product03.jpg')} name="CABO COM ISOLAÇÃO" sub="(ALTA TEMPERATURA)" description="O cabo para alta temperatura, chamado de cabo com isolação, é produto em cobre estanhado ou cobre nú e possui isolação em silicone ..." price={false} />
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
                    <Slider dots={false} infinite={true} autoplay={false} autoplaySpeed={4000} speed={500} slidesToShow={1} centerMode={true} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item" image={require('../assets/products/product02.jpg')} name="PLUGUE INDUSTRIAL" description="Plugue industrial, chamado também de plugue Steck, para utilização em diversos equipamentos, tanto para instalações industriais como para comercias. " price="80,00" />
                        <ProductShowcase cls="item" image={require('../assets/products/product03.jpg')} name="CABO COM ISOLAÇÃO" sub="(ALTA TEMPERATURA)" description="O cabo para alta temperatura, chamado de cabo com isolação, é produto em cobre estanhado ou cobre nú e possui isolação em silicone ..." price={false} />
                        <ProductShowcase cls="item" image={require('../assets/products/product01.jpg')} name="LUXÍMETRO" description="O luxímetro é um aparelho de medição usado para calcular a intensidade de luz de um determinado ponto que contenha lâmpada. Possui visor LCD, luz de fundo para leitura ..." price="260,00" />
                    </Slider>
                </section>
            </div>
        )
    }
}