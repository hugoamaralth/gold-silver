import React from 'react';
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { productById, productsByFilter } from '../main/tempData';
import ProductShowcase from '../components/product-showcase';
import BtnCart from '../components/btn-add-to-cart';
import '../styles/product.css';

export default function(props) {
        let { id } = useParams();
        let prod = productById(id);
        const productPictures = [];
        if(prod.othersImages == undefined){
            productPictures.push({
                original: `../${prod.image}`,
                thumbnail: `../${prod.image}`
            });
        } else {
            for(let i = 0; i <= prod.othersImages; i++){
                if(i === 0){
                    productPictures.push({
                        original: `../${prod.image}`,
                        thumbnail: `../${prod.image}`
                    });    
                } else {
                    let img = prod.image.split('.');
                    img = img[0]+'_'+(i+1)+'.'+img[1];
                    productPictures.push({
                        original: `../${img}`,
                        thumbnail: `../${img}`
                    })
                }
            }
        }
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
                    arrows: false
                  }
                },
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 2,
                      arrows: false
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
        function makeProducts(amount){
            let ret = [];
            let productsNews = productsByFilter({
                category: prod.category
            });
            for(let prod in productsNews){
                let p = productsNews[prod];
                ret.push(<ProductShowcase image={'../'+p.image} marca={p.marca} name={p.name} description={p.description.substr(0, 180) + ((p.description.length > 180) ? '...' : '')} price={p.price} id={p.id} key={p.id} />);
            }
            return ret;
        }
     return(
        <div className="product-page">
            <div className="breadcrumb">
                Home > {prod.category} > {prod.marca}
            </div>
            <div className="product-photo">
                <ImageGallery items={productPictures} showPlayButton={false} />
            </div>
            <div className="product-description-page">
                <h1>
                    {prod.name} <span>{prod.marca}</span>
                </h1>
                <BtnCart price={prod.price} />
                <p>{prod.description}</p>
            </div>
            <div className="relatedProducts">
                <h3>Produtos relacionados</h3>
                    <Slider {...slidersConfig}>
                        {makeProducts(11)}
                    </Slider>
            </div>
        </div>
     )

}