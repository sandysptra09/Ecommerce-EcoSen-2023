import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ShopComponent.css';

export default function ShopComponent() {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const [latestProduct, setLatestProduct] = useState(null);
    const [productAll, setProductAll] = useState(null);

    useEffect(() => {
        const fetchLatestProduct = async () => {
            try {
                const response = await axios.get('http://192.168.1.101:9000/product')
                setLatestProduct(response.data);
            }
            catch (error) {
                console.log('Failed to fecth Latest Product', error);
            }
        }
        const fetchProductAll = async () => {
            try{
                const response = await axios.get('http://192.168.1.101:9000/product?page=1&limit=12')
                setProductAll(response.data);
            }
            catch (error) {
                console.log('Failed to fetch Product All', error);
            }
        }
        fetchProductAll();
        fetchLatestProduct();
    }, [])

    if (!latestProduct) {
        return (
            <div className='hidden-loading'>
                <h5>Loading...</h5>
            </div>
        );
    }

    if (!productAll) {
        return (
            <div className="hidden-loading">
                <h5>Loading...</h5>
            </div>
        )
    }

    console.log(latestProduct.data)
    console.log(productAll.data);

    return (
        <div className="container-shopcomponent">
            <div className="ShopComponent">
                <div className="sidebar-shopcomponent">
                    <div className="categories-sidebar-shopcomponent">
                        <div className="all-departemen-shopcomponent">
                            <img className='icon-all-departments' src="/assets/elements/iconline-sc.png" alt="" onClick={toggleDropdown} />
                            <p>All Departments </p>
                        </div>
                        {/* menjadi dropdown */}
                        {showDropdown && (
                            <div className="listcategories-shopcomponent">
                                <div className="listcategories1-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/vegetables.png' alt='' />
                                        <p>Vegetables</p>
                                    </div>
                                </div>
                                <div className="listcategories2-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/apple.png' alt='' />
                                        <p>Fruits</p>
                                    </div>
                                </div>
                                <div className="listcategories3-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/fresh-meat.png' alt='' />
                                        <p>Fresh Meat</p>
                                    </div>
                                </div>
                                <div className="listcategories4-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/ocean-foods.png' alt='' />
                                        <p>Ocean Foods</p>
                                    </div>
                                </div>
                                <div className="listcategories5-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/milk-cream.png' alt='' />
                                        <p>Milk & Cream</p>
                                    </div>
                                </div>
                                <div className="listcategories6-shopcomponent">
                                    <div className="lc-sc">
                                        <img className='icon-all-departments' src='/assets/elements/sea-food.png' alt='' />
                                        <p>Set Food</p>
                                    </div>
                                </div>
                                <div className="listcategories7-shopcomponent">
                                    <div className="lc-sc">
                                        <img src='/assets/elements/egg.png' alt='' />
                                        <p>Eggs</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="filter-by-grup-shopcomponent">
                        <div className="fbg1-shopcomponent">
                            <p>New Arrivals</p>
                        </div>
                        <div className="fbg2-shopcomponent">
                            <p>Best Sellers</p>
                        </div>
                        <div className="fbg3-shopcomponent">
                            <p>Special Offers</p>
                        </div>
                    </div>
                    <div className="price-shopcomponent">
                        <div className="sidebar-price-shopcomponent">
                            <div className="heading-price-shopcomponent">
                                <h6>Price</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_454_1582)">
                                        <path d="M7 15L12 10L17 15" stroke="#454545" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_454_1582">
                                            <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="frame-price-shopcomponent">
                            <div className="fp-price-shopcomponent">
                                <div className="btn-fp1-shopcomponent">
                                    <p>$10</p>
                                </div>
                                <div className="btn-fp2-shopcomponent">
                                    <p>$10000</p>
                                </div>
                            </div>
                            <div className="range-slider-shopcomponent">
                                <input type="range" name="" id="" min={10} max={15000} />
                            </div>
                        </div>
                        <button className='button-price-shopcomponent'>
                            <img src="/assets/elements/buttonprice-sc.png" alt="" />
                            <p>Filter</p>
                        </button>
                    </div>
                    <div className="latestproducts-shopcomponent">
                        <div className="heading-latestproducts-shopcomponent">
                            <div className="head-latestproducts-shopcomponent">
                                <h6>Latest Products</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_454_1594)">
                                        <path d="M7 15L12 10L17 15" stroke="#454545" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_454_1594">
                                            <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="latestproducts-shopcomponent">
                            {latestProduct.data.map((latest) => (
                                <div className="product-content-sc" key={latest.id}>
                                    <div className="product-sc">
                                        <img src='' alt='' />
                                    </div>
                                    <div className="content-sc">
                                        <div className="titleproduct-sc">
                                            <Link to={`/shop/detail-shop/${latest.id}`}  className='tp-sc'>{latest.product_name}</Link>
                                            <p className='pp-sc'>{latest.detail_price}</p>
                                        </div>
                                        <div className="price-product-sc">
                                            <h6>${latest.price}</h6>
                                            <p>${latest.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="latestproducts-shopcomponent">
                            <div className="product-content-sc">
                                <div className="product-sc"></div>
                                <div className="content-sc">
                                    <div className="titleproduct-sc">
                                        <p className='tp-sc'>Guava Fruit (10 Pcs)</p>
                                        <p className='pp-sc'>$0.80/pc</p>
                                    </div>
                                    <div className="price-product-sc">
                                        <h6>$8.00</h6>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="latestproducts-shopcomponent">
                            <div className="product-content-sc">
                                <div className="product-sc"></div>
                                <div className="content-sc">
                                    <div className="titleproduct-sc">
                                        <p className='tp-sc'>Shiseido Anniversary</p>
                                        <p className='pp-sc'>$2.00/pc</p>
                                    </div>
                                    <div className="price-product-sc">
                                        <h6>$75.00</h6>
                                        <p>$75.00</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="productfilter-shopcomponent">
                    <div className="tag-filter-shopcomponent">
                        <div className="tf-filter-shopcomponent">
                            <div className="tf-display-shopcomponent">
                                <p>Showing 1-12 of 90 result</p>
                            </div>
                            <div className="tf-default-shopcomponent">
                                <p>Default Sorting</p>
                                <div className="garisdefault-shopcomponent">
                                    <svg className='garis1-sc' xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 18 2" fill="#61676A">
                                        <path d="M1 1H17" stroke="#61676A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className='garis2-sc' xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 14 2" fill="#61676A">
                                        <path d="M1 1H13" stroke="#61676A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className='garis3-sc' xmlns="http://www.w3.org/2000/svg" width="6" height="2" viewBox="0 0 10 2" fill="#61676A">
                                        <path d="M1 1H9" stroke="#61676A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="tf-tag-shopcomponent">
                            <div className="tag-shopcomponent">
                                <div className="text-tag-shopcomponent">
                                    <p className='t1-tag'>Price:</p>
                                    <p className='t2-tag'>S40 - $1200</p>
                                </div>
                                <svg className="remove-tag" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <g opacity="0.8">
                                        <path d="M1 1L9 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M9 1L1 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="tag-shopcomponent">
                                <div className="text-tag-shopcomponent">
                                    <p className='t1-tag'>Element:</p>
                                    <p className='t2-tag'>S40 - $1200</p>
                                </div>
                                <svg className="remove-tag" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <g opacity="0.8">
                                        <path d="M1 1L9 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M9 1L1 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="tag-shopcomponent">
                                <div className="text-tag-shopcomponent">
                                    <p className='t1-tag'>Price:</p>
                                    <p className='t2-tag'>S40 - $1200</p>
                                </div>
                                <svg className="remove-tag" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <g opacity="0.8">
                                        <path d="M1 1L9 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M9 1L1 9" stroke="#293042" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="clear-tag-shopcomponent">
                                <div className="textclear-tag-shopcomponent">
                                    <p>Clear All</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-product-shopcomponent">
                        <div className="row-product-shopcomponent">
                            <div className='container-product-shopcomponent'>
                                <div className='row-products-shopcomponent'>
                                    <div className='rowproduct-shopcomponent'>
                                        {productAll.data.map((productsAll) => (
                                            <div className='card-product-shopcomponent' key={productsAll.id}>
                                            <img className='img-sc-product' src={productsAll.product_image} alt='' />
                                            <div className='information-sc-product'>
                                                <div className='left-side-information-sc'>
                                                    <div className='name-of-sc-product'>
                                                        <h5 className='title-sc-product'>{productsAll.product_name}</h5>
                                                        <h6 className='pcs-sc-product'>{productsAll.detail_price}</h6>
                                                    </div>
                                                    <div className='price-of-sc-product'>
                                                        <h5 className='price-sc-product'>{productsAll.price}</h5>
                                                        <h6 className='discon-sc-product'>{productsAll.discount}</h6>
                                                    </div>
                                                </div>
                                                <button className='add-cart-sc'>
                                                    <img className='icon-add-cart-sc' src='/assets/elements/add-cart.png' alt='' />
                                                </button>
                                            </div>
                                            {/* <div className='tag-product-card-sc'>
                                                <div className='tag-new-sc'>
                                                    <h6 className='title-new-sc'>New</h6>
                                                </div>

                                            </div> */}
                                        </div>
                                        ))}
                                        
                                        {/* <div className='card-product-shopcomponent'>
                                            <img className='img-sc-product' src='' alt='' />
                                            <div className='information-sc-product'>
                                                <div className='left-side-information-sc'>
                                                    <div className='name-of-sc-product'>
                                                        <h5 className='title-sc-product'>pork ribs (500g)</h5>
                                                        <h6 className='pcs-sc-product'>$ 4.20/100g</h6>
                                                    </div>
                                                    <div className='price-of-sc-product'>
                                                        <h5 className='price-sc-product'>$21.00</h5>
                                                        <h6 className='discon-sc-product'>$23.00</h6>
                                                    </div>
                                                </div>
                                                <button className='add-cart-sc'>
                                                    <img className='icon-add-cart-sc' src='/assets/elements/add-cart.png' alt='' />
                                                </button>
                                            </div>
                                            {/* <div className='tag-product-card-sc'>
                                                <div className='tag-discount-sc'>
                                                    <h6 className='title-discount-sc'>-5%</h6>
                                                </div>
                                            </div> */}
                                       {/* </div> */}
                                        {/* <div className='card-product-shopcomponent'>
                                            <img className='img-sc-product' src='' alt='' />
                                            <div className='information-sc-product'>
                                                <div className='left-side-information-sc'>
                                                    <div className='name-of-sc-product'>
                                                        <h5 className='title-sc-product'>bell pepper (500g)</h5>
                                                        <h6 className='pcs-sc-product'>$ 1.20/100g</h6>
                                                    </div>
                                                    <div className='price-of-sc-product'>
                                                        <h5 className='price-sc-product'>$6.00</h5>
                                                        <h6 className='discon-sc-product'></h6>
                                                    </div>
                                                </div>
                                                <button className='add-cart-sc'>
                                                    <img className='icon-add-cart-sc' src='/assets/elements/add-cart.png' alt='' />
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-shopcomponent">
                        <div className="page-shopcomponent">
                            <p>1</p>
                        </div>
                        <div className="page-shopcomponent">
                            <p>2</p>
                        </div>
                        <div className="page-shopcomponent">
                            <p>3</p>
                        </div>
                        <div className="page-shopcomponent">
                            <p>4</p>
                        </div>
                        <div className="page-shopcomponent">
                            <p>5</p>
                        </div>
                        <div className="page-shopcomponent">
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.23432 13.7722C1.9219 13.4685 1.9219 12.976 2.23432 12.6722L8.06863 7L2.23431 1.32775C1.9219 1.02401 1.9219 0.531546 2.23431 0.227806C2.54673 -0.0759353 3.05327 -0.0759353 3.36569 0.227806L9.76569 6.45003C10.0781 6.75377 10.0781 7.24623 9.76569 7.54997L3.36569 13.7722C3.05327 14.0759 2.54673 14.0759 2.23432 13.7722Z" fill="#293042" />
                            </svg></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}