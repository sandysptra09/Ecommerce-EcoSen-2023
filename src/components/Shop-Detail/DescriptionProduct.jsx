import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DescriptionProduct.css";

const DescriptionProduct = ({ description }) => {
    const [related, setRelated] = useState(null);
    // console.log(description);
    useEffect(() => {
        const fetchRelatedProduct = async () => {
            try {
                const response = await axios.get("http://192.168.1.101:9000/product");
                setRelated(response.data);
                console.log();
            } catch (error) {
                console.log();
            }
        };
        fetchRelatedProduct();
    }, []);

    if (!related) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content-description">
            <div
                className="description-product"
                dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* <img className="description-product-img" src="" alt="" /> */}
            {/* <p className="description-product-2">
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat
            </p> */}
            {/* <p className="description-product-3">
                Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat
            </p> */}
            <div className="introduce-description-product">
                <div className="service-categories-introduce">
                    <div className="service-categories-1">
                        <div className="service-intro">
                            <img
                                className="free-delivery"
                                src="/assets/elements/free-delivery.png"
                                alt=""
                            />
                            <div className="title-service-intro">
                                <h6 className="title-intro">Free Delivery</h6>
                                <h6 className="desc-intro">
                                    Free shipping on all order over $40
                                </h6>
                            </div>
                        </div>
                        <div className="service-intro">
                            <img
                                className="organic"
                                src="/assets/elements/100-organic.png"
                                alt=""
                            />
                            <div className="title-service-intro">
                                <h6 className="title-intro">100% Organic</h6>
                                <h6 className="desc-intro">All products are 100%</h6>
                            </div>
                        </div>
                    </div>
                    <div className="service-categories-2">
                        <div className="service-intro">
                            <img
                                className="easy-secure"
                                src="/assets/elements/easy-secure.png"
                                alt=""
                            />
                            <div className="title-service-intro">
                                <h6 className="title-intro">Easy and secure</h6>
                                <h6 className="desc-intro">Online payment with credit </h6>
                            </div>
                        </div>
                        <div className="service-intro">
                            <img
                                className="support"
                                src="/assets/elements/support.png"
                                alt=""
                            />
                            <div className="title-service-intro">
                                <h6 className="title-intro">24/7 Support</h6>
                                <h6 className="desc-intro">Delivery to any point</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="img-introduce" src="" alt="" />
            </div>
            <p className="description-introduce">
                Elevate your lifestyle with our premium collection of products. From the
                added convenience of free delivery on orders over $40 to our unwavering
                commitment to providing 100% organic products, we prioritize your
                well-being at every step. Enjoy the ease and security of online payments
                with credit cards, ensuring a seamless and protected shopping process.
                Our dedicated 24/7 support team is committed to providing assistance and
                guaranteeing that your order reaches you at any location. Explore the
                epitome of quality and service with our exclusive range of products,
                designed to meet your every need and exceed your expectations.
            </p>
            <div className="picture-introduce-product">
                <img className="img-picture-introduce" src="" alt="" />
                <h3 className="title-introduce">foods good for health</h3>
            </div>

            <div className="container-related-product">
                <div className="related-products">
                    <h3 className="tite-desc-related-product">Related products</h3>
                    <div className="product-related">
                        <div className="card-related-product">
                            <img className="img-related-product" src="" alt="" />
                            <div className="information-related-product">
                                <div className="left-side-information-related">
                                    <div className="name-of-related-product">
                                        <h5 className="title-related-product">Orange (10 Pcs)</h5>
                                        <h6 className="pcs-related-product">$ 1.20/pc</h6>
                                    </div>
                                    <div className="price-of-related-product">
                                        <h5 className="price-related-product">$10.00</h5>
                                        <h6 className="discon-related-product">$12.00</h6>
                                    </div>
                                </div>
                                <button className="add-cart-related">
                                    <img
                                        className="icon-add-cart-related"
                                        src="/assets/elements/add-cart.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="tag-product-card-related">
                                <div className="tag-discount-related">
                                    <h6 className="title-discount-related">-5%</h6>
                                </div>
                                <div className="tag-new-related">
                                    <h6 className="title-new-related">New</h6>
                                </div>
                            </div>
                        </div>
                        {related.data.map((itemRelated) => (
                            <div className="card-related-product" key={itemRelated.id}>
                                <img
                                    className="img-related-product"
                                    src={itemRelated.product_image}
                                    alt=""
                                />
                                <div className="information-related-product">
                                    <div className="left-side-information-related">
                                        <div className="name-of-related-product">
                                            <h5 className="title-related-product">
                                                {itemRelated.product_name}
                                            </h5>
                                            <h6 className="pcs-related-product">
                                                $ {itemRelated.detail_price}
                                            </h6>
                                        </div>
                                        <div className="price-of-related-product">
                                            <h5 className="price-related-product">
                                                {itemRelated.price}
                                            </h5>
                                            <h6 className="discon-related-product">$12.00</h6>
                                        </div>
                                    </div>
                                    <button className="add-cart-related">
                                        <img
                                            className="icon-add-cart-related"
                                            src="/assets/elements/add-cart.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div className="tag-product-card-related">
                                    <div className="tag-discount-related">
                                        <h6 className="title-discount-related">-5%</h6>
                                    </div>
                                    <div className="tag-new-related">
                                        <h6 className="title-new-related">New</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionProduct;
