import React from 'react';
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { productById, productsByFilter } from '../main/tempData';
import ProductShowcase from '../components/product-showcase';
import BtnCart from '../components/btn-add-to-cart';
import '../styles/product.css';


export default function (props) {
    const productPictures = [];
    let { id } = useParams();
    let prod = productById(id);
    
    prod.image = prod.image.split("../").join("");

    if (prod.othersImages == undefined) {
        productPictures.push({
            original: `../${prod.image}`,
            thumbnail: `../${prod.image}`
        });
    } else {
        for (let i = 0; i <= prod.othersImages; i++) {
            if (i === 0) {
                productPictures.push({
                    original: `../${prod.image}`,
                    thumbnail: `../${prod.image}`
                });
            } else {
                let img = prod.image.split('.');
                img = img[0] + '_' + (i + 1) + '.' + img[1];
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
        slidesToShow: 4,
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
    function makeProducts(amount) {
        let ret = [];
        let productsNews = productsByFilter({
            category: prod.category
        }, amount);
        for (let prod in productsNews) {
            let p = productsNews[prod];
            p.image = `../${p.image}`
            ret.push(<ProductShowcase prod={p} key={p.id} handlerAddToBasket={props.handlerAddToBasket} />);
        }
        return ret;
    }
    return (
        <div className="product-page">
            <div className="breadcrumb">
                Home > {prod.category} > {prod.marca}
            </div>
            <div className="content-product">
                <div className="product-photo">
                    <ImageGallery items={productPictures} showPlayButton={false} />
                </div>
                <div className="product-description-page">
                    <h1>
                        {prod.name} <span>{prod.marca}</span>
                    </h1>
                    <BtnCart prod={prod} handlerAddToBasket={props.handlerAddToBasket} />
                    <p>{prod.description}</p>
                </div>
            </div>
            <div className="relatedProducts">
                <h3>Produtos relacionados</h3>
                <Slider {...slidersConfig}>
                    {makeProducts(4)}
                </Slider>
            </div>
        </div>
    )

}