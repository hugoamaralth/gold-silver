import React from 'react';
import Slider from "react-slick";
import ProductShowcase from '../components/product-showcase';

export default class HomePage extends React.Component {
    render(){
        return (
            <div className="home-page">
                <Slider dots={false} infinite={true} autoplay={true} autoplaySpeed={5000} speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
                    {/* <img src="https://via.placeholder.com/1100x650/E72222/000?text=BANNER+01" />
                    <img src="https://via.placeholder.com/1100x650/000/E72222?text=BANNER+02" />
                    <img src="https://via.placeholder.com/1100x650/E72222/000?text=BANNER+03" /> */}
                    <div className="bannerTop">
                        DESTAQUE 01
                    </div>
                    <div className="bannerTop b2">
                        DESTAQUE 02
                    </div>
                    <div className="bannerTop b3">
                        DESTAQUE 03
                    </div>
                    <div className="bannerTop b4">
                        DESTAQUE 04
                    </div>
                </Slider>

                <section className="section categoria01">
                    <h3>Novidades</h3>
                    <Slider dots={false} infinite={true} autoplay={false} autoplaySpeed={4000} speed={500} slidesToShow={1} centerMode={true} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+01" name="Produto 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$60,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+02" name="Produto 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$80,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+03" name="Produto 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$90,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+04" name="Produto 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$120,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+05" name="Produto 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                    </Slider>
                </section>

                <div className="section parallax parallax1">
                    <h1>Os melhores produtos com os melhores preços!</h1>
                </div>

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

            </div>
        )
    }
}