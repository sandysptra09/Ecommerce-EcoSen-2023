import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./NewArrival.css";

export default function NewArivval() {
    const [product, setProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Fruits");

    const fetchProductsByCategory = async (categories) => {
        try {
            const response = await axios.get(
                "http://192.168.1.101:9000/product?page=1&limit=12&category_name=" + categories
            );
            setProduct(response.data);
        } catch (error) {
            console.log("Failed to fecth All Products", error);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        fetchProductsByCategory(category);
    };

    useEffect(() => {
        fetchProductsByCategory(selectedCategory);
  }, [selectedCategory]);


    if (!product) {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        );
    }

    console.log(product);

    return (
        <div className="container-new-arrival">
            <div className="new-arrival">
                <div className="new-arrival-categories">
                    <h3 className="title">New Arrivals</h3>
                    <div className="categories-new">
                        <div className="all" onClick={() => handleCategoryChange("")}>
                            <h5 className="title-all">All</h5>
                        </div>
                        <div className="meatt" onClick={() => handleCategoryChange("Meat")}>
                            <h5 className="title-meatt">Meat</h5>
                        </div>
                        <div className="vegetable" onClick={() => handleCategoryChange("Vegetables")}>
                            <h5 className="title-vegetable">Vegetable</h5>
                        </div>
                        <div className="fruit" onClick={() => handleCategoryChange("Fruits")}>
                            <h5 className="title-fruit">Fruit</h5>
                        </div>
                        <div className="egg-milk" onClick={() => handleCategoryChange("Eggs & Milk")}>
                            <h5 className="title-egg-milk">Egg & Milk</h5>
                        </div>
                    </div>
                </div>

                <div className="product-new-arrivals">
                    <div className="product-first">
                        {product.data.map((itemProducts) => (
                            <div className="all-product-card-shop" key={itemProducts.id} >
                            <img className="img-all-product-card" src="" alt="" />
                            <div className="information-all-product-card">
                                <div className="left-side-information-all">
                                    <div className="name-of-all-product">
                                        <Link to={`/shop/detail-shop/${itemProducts.id}`} className="title-all-product">{itemProducts.product_name}</Link>
                                        <h6 className="pcs-all-product">{itemProducts.detail_price}</h6>
                                    </div>
                                    <div className="price-of-all-product">
                                        <h5 className="price-all-product">${itemProducts.price}</h5>
                                        <h6 className="discon-all-product">$6.00</h6>
                                    </div>
                                </div>
                                <button className="add-all-cart">
                                    <img
                                        className="icon-add-all-cart"
                                        src="/assets/elements/add-cart.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="tag-all-product-card">
                                <div className="tag-all-discount">
                                    <h6 className="title-all-discount">-5%</h6>
                                </div>
                                <div className="tag-all-new">
                                    <h6 className="title-all-new">New</h6>
                                </div>
                            </div>
                        </div>
                        ))}

                        

                        {/* <div className='product-card'>
                            <img className='card-img-product-shop' src='' alt='Product image' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                        {/* <div className='product-card'>
                            <img className='card-img' src='' alt='' />
                            <div className='information-product-card'>
                                <div className='left-side-information'>
                                    <div className='name-of-product'>
                                        <h5 className='title-product'>Lettuce (200g)</h5>
                                        <h6 className='pcs-product'>$ 1.50/100g</h6>
                                    </div>
                                    <div className='price-of-product'>
                                        <h5 className='price-product'>$3.00</h5>
                                        <h6 className='discon-product'>$6.00</h6>
                                    </div>
                                </div>
                                <button className='add-cart'>
                                    <img className='icon-add-cart' src='/assets/elements/add-cart.png' alt='' />
                                </button>
                            </div>
                            <div className='tag-product-card'>
                                <div className='tag-discount'>
                                    <h6 className='title-discount'>-5%</h6>
                                </div>
                                <div className='tag-new'>
                                    <h6 className='title-new'>New</h6>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className='hover-add-cart'>
                <button className='hover-next'>
                    <img className='icon-next' src='/assets/elements/hover-next.png' alt='' />
                </button>
                <button className='hover-wishlist'>
                    <img className='icon-next' src='/assets/elements/hover-wishlist.png' alt='' />
                </button>
                <button className='hover-see'>
                    <img className='icon-next' src='/assets/elements/hover-see.png' alt='' />
                </button>
            </div> */}
        </div>
    );
}
