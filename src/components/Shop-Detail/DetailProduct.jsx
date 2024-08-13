import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./DetailProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import DescriptionProduct from "./DescriptionProduct";
import ReviewProduct from "./ReviewProduct";
import Footer from '../Footer/Footer';

export default function DetailProduct() {
    // detail product
    const [detailProduct, setDetailProduct] = useState(null)
    const params = useParams()
    const productId = params.productId

    const [selectedOption, setSelectedOption] = useState('description');

    let selectedComponent;

    if (!detailProduct) {
        selectedComponent = <div>Loading...</div>;
    } else if (selectedOption === 'description') {
        selectedComponent = <DescriptionProduct description={detailProduct.data?.description} />;
    } else if (selectedOption === 'reviews') {
        selectedComponent = <ReviewProduct id={detailProduct.data?.id}/>;
    }
    // console.log(detailProduct?.data?.description);

    useEffect(() => {
        const fetchDetailProductById = async () => {
            try {
                const response = await axios.get(`http://192.168.1.101:9000/product/${productId}`);
                setDetailProduct(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching Detail Product By Id');
            }
        };

        fetchDetailProductById();
    }, [productId]);

    const handleAddToWishlist = async (productIds) => {
        console.log(productId);
        try {
            const token = localStorage.getItem('token');

            const responseWishlist = await axios.post(
                `http://192.168.1.101:9000/wishlist`,
                {
                    product_id: parseInt(productIds),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Product added to wishlist', responseWishlist.data);
        } catch (error) {
            console.log('Failed add product to wishlist!');
        }
    };


    if (!detailProduct) {
        return (
            <div className='loading-page'>
                <h5>Loading...</h5>
            </div>
        );
    }

    return (
        <div>
            <div className="container-detail-product">
                <div className="detail-product">
                    <div className="buy-product">
                        <div className="detail-product-image">
                            <div className="picture-detail">
                                <img className="picture-detail-product" src={detailProduct.data.product_image} alt="" />
                                <div className="picture-tag-product">
                                    <div className="picture-tag-1">
                                        <div className="tag-detail">
                                            <h6 className="tag-text-dc">-5%</h6>
                                        </div>
                                    </div>
                                    <div className="picture-tag-2">
                                        <div className="tag-detail-2">
                                            <h6 className="tag-text-new">NEW</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-picture-product">
                                <div className="small-picture-carousel">
                                    <Swiper
                                        slidesPerView={4}
                                        spaceBetween={20}
                                        freeMode={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[FreeMode, Pagination]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img className="small-carousel" src={detailProduct.data.image[0].sub_images} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="small-carousel" src={detailProduct.data.image[1].sub_images} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="small-carousel" src={detailProduct.data.image[2].sub_images} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="small-carousel" src={detailProduct.data.image[3].sub_images} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="small-carousel" src={detailProduct.data.image[0].sub_images} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="detail-product-information">
                            <div className="name-detail-product">
                                <h5 className="title-name-detail">
                                    {detailProduct.data.product_name}
                                </h5>
                                <div className="left-title-product">
                                    <div className="product-left-title">
                                        <h6 className="detail-pcs">{detailProduct.data.detail_price}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="review-detail-product">
                                <div className="review-customer">
                                    <h6 className="total-customer">1</h6>
                                    <h6 className="customer-reviews">Customer reviews</h6>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                                    <path d="M1 0.75V17.25" stroke="#727272" />
                                </svg>
                                <div className="sold-review">
                                    <h6 className="sold">Sold</h6>
                                    <h6 className="sold-total">32</h6>
                                </div>
                            </div>
                            <p className="short-desc-product">
                                {detailProduct.data.product_detail}
                            </p>
                            <div className="product-spesifications">
                                <h5 className="title-spesifications">
                                    Product Specifications
                                </h5>
                                <ul className="spec-list" dangerouslySetInnerHTML={{ __html: detailProduct.data.product_specification }} />
                                {/* <li>Aenean tristique</li>
                                <li>200mg Hendrerit purus eu</li>
                                <li>Battery Indicator Light</li>
                                <li>Connects Directly To The Suspension</li> */}
                                {/* </ul> */}
                            </div>
                            <div className="in-stock">
                                <img className="icon-in-stock" src="/assets/elements/in-stock.png" alt="" />
                                <h6 className="title-in-stock">In Stock</h6>
                            </div>
                            <div className="price-selection">
                                <div className="title-price-selection">
                                    <div className="title-selection">
                                        <h6 className="price-normal">{detailProduct.data.price}</h6>
                                        <h6 className="price-dc">${detailProduct.data.discount}</h6>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                                        <path d="M1 0.75V21.25" stroke="#898989" />
                                    </svg>
                                    <div className="caption-selection">
                                        <img className="icon-deliver" src="/assets/elements/deliver.png" alt="" />
                                        <h6 className="free-delivery">Free delivery from $45</h6>
                                    </div>
                                </div>
                                <div className="options-selection">
                                    <div className="quantity-selection">
                                        <div className="minus-option">
                                            <img className="icon-minus" src="/assets/elements/minus.png" alt="" />
                                        </div>
                                        <span className="qyt-option">1</span>
                                        <div className="plus-option">
                                            <img className="icon-plus" src="/assets/elements/plus.png" alt="" />
                                        </div>
                                    </div>
                                    <button className="add-cart-selection">
                                        <img className="icon-cart-selection" src="/assets/elements/add-cart.png" alt="" />
                                        <h6 className="text-cart-selection">ADD TO CART</h6>
                                    </button>
                                    <div className="icon-btn-selection" onClick={() => handleAddToWishlist(productId)}>
                                        <img className="icon-wishlist-selection" src="/assets/elements/wishlist-option.png" alt="" />
                                        <div className="icon-share-selection">
                                            <img className="share-selection" src="/assets/elements/share-option.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-view-more">
                                    <div className="title-view-more">
                                        <h6 className="view-more-text">VIEW MORE</h6>
                                        <img className="slash" src="/assets/elements/slash.png" alt="" />
                                    </div>
                                    <div className="icon-view-more">
                                        <img className="icon-view" src="/assets/elements/right-view.png" alt="" />
                                    </div>
                                </button>
                                <div className="information-selection">
                                    <div className="information-1">
                                        <h6 className="title-info">Size</h6>
                                        <h6 className="title-text">{detailProduct.data.size}</h6>
                                    </div>
                                    <div className="information-2">
                                        <h6 className="title-info">Origin</h6>
                                        <h6 className="title-text">{detailProduct.data.origin}</h6>
                                    </div>
                                    <div className="information-3">
                                        <h6 className="title-info">Product Code</h6>
                                        <h6 className="title-text">{detailProduct.data.product_code}</h6>
                                    </div>
                                    <div className="information-4">
                                        <h6 className="title-info">Tag</h6>
                                        <h6 className="title-text">{detailProduct.data.tag}</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-reviews">
                    <div className="option-condition">
                        <div
                            className='description-option'
                            onClick={() => setSelectedOption('description')}
                        >
                            <h6 className="title-desc-opt">Description</h6>
                        </div>
                        <div
                            className='reviews-option'
                            onClick={() => setSelectedOption('reviews')}
                        >
                            <h6 className="title-rev-opt">Reviews (1)</h6>
                        </div>
                    </div>
                </div>

                {selectedComponent}

            </div>
            <Footer />
        </div>

    );
}
