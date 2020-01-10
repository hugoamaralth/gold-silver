import React from 'react';
import Slider from "react-slick";
import SliderAnimated from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import ProductShowcase from '../components/product-showcase';

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
                {/* 
                <section className="section categoria01">
                    <h3>Categoria 02</h3>
                    <Slider dots={false} infinite={true} autoplay={false} autoplaySpeed={2500} speed={500} slidesToShow={2} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+01" name="Produto 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$60,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+02" name="Produto 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$80,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+03" name="Produto 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$90,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+04" name="Produto 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$120,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+05" name="Produto 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+06" name="Produto 06" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                    </Slider>
                </section> 

                <section className="section payment">
                    <h1>Compra segura!</h1>
                    <img src="//assets.pagseguro.com.br/ps-integration-assets/banners/seguranca/seguranca_125x125.gif" alt="Banner PagSeguro" title="Compre com PagSeguro e fique sossegado"></img>
                </section>
                */}
            </div>
        )
    }
}