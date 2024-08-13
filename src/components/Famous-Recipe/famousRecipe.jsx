import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Navigation, FreeMode, Pagination } from 'swiper/modules';


import './FamousRecipe.css'

export default function FamousRecipe() {
    const [famousProduct, setFamousProduct] = useState(null);

    useEffect(() => {
        const fetchFamousProduct = async () => {
            try {
                const response = await axios.get('http://192.168.1.101:9000/product/famous-products')
                setFamousProduct(response.data)
            }
            catch {
                console.log('error fetching famous products');
            }
        }
        fetchFamousProduct();
    }, [])

    if (!famousProduct) {
        return (
            <div className="loading-page">
                <h5>Loading...</h5>
            </div>
        )
    }



    return (
        <div className='container-famous-recipe'>
            <div className='famous-recipe'>
                <div className='title-list-food-card'>
                    <h3 className='title-famous-recipe'>Famous Products</h3>
                    <div className='list-food-cards'>
                        <div className='food-cards'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                freeMode={true}
                                navigation={true}
                                modules={[FreeMode, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {famousProduct.data.map((productsFamous) => (
                                    <SwiperSlide key={productsFamous.id}>
                                        <div className='food-category'>
                                            <img className='food-category-image' src={productsFamous.image} alt='' />
                                            <h5 className='food-category-title'>{productsFamous.name}</h5>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>

                <div className='food-list-product'>
                    <div className='food-list-products'>
                        <div className='food-set'>
                            <div className='picture-food'>
                                <div className='product-big'>
                                    <img className='vector-food' src='/assets/elements/vector-food.png' alt='' />
                                    <img className='image-food' src='/img-product/bundle-healthyfood.jpg' alt='Product Image' />
                                    <div className='tag-sale'>
                                        <img className='icon-tag-sale' src='/assets/elements/img-tag-sale.png' alt='' />
                                        <h5 className='food-price'>
                                            $25.00
                                        </h5>
                                        <span className='food-pcs'>/1 set</span>
                                    </div>
                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy'>
                                    <div className='background'></div>
                                    <img className='img-food-card' src='/img-product/lettuce.webp' alt='' />
                                    <button className='btn-food-card'>
                                        <img className='icon-food-card' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy'>

                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy-2'>
                                    <div className='background-2'></div>
                                    <img className='img-food-card-2' src='/img-product/beef.jpg' alt='' />
                                    <button className='btn-food-card-2'>
                                        <img className='icon-food-card-2' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy-2'>

                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy-3'>
                                    <div className='background-3'></div>
                                    <img className='img-food-card-3' src='/img-product/bellpepper.jpg' alt='' />
                                    <button className='btn-food-card-3'>
                                        <img className='icon-food-card-3' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy-3'>

                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy-4'>
                                    <div className='background-4'></div>
                                    <img className='img-food-card-4' src='/img-product/onion.jpg' alt='' />
                                    <button className='btn-food-card-4'>
                                        <img className='icon-food-card-4' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy-4'>

                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy-5'>
                                    <div className='background-5'></div>
                                    <img className='img-food-card-5' src='/img-product/tomatoes.jpg' alt='' />
                                    <button className='btn-food-card-5'>
                                        <img className='icon-food-card-5' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy-5'>

                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='picture-btn-buy-6'>
                                    <div className='background-6'></div>
                                    <img className='img-food-card-6' src='/img-product/egg.webp' alt='' />
                                    <button className='btn-food-card-6'>
                                        <img className='icon-food-card-6' src='/assets/elements/add-cart.png' alt='Add to Cart' />
                                    </button>
                                </div>
                                <div className='text-btn-buy-6'>

                                </div>
                            </div>

                        </div>
                    </div>
                    <button className='btn-buy-set'>
                        <img className='btn-icon' src='/assets/elements/btn-icon.png' alt='' />
                        <h5 className='btn-title'>Buy Set</h5>
                    </button>
                </div>
            </div>
        </div>
    )
}