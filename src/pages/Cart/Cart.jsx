import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Cart.css'

export default function Cart() {
    return (
        <div>
            <Header />
            <div className="intro-banner-cart">
                <img src="" alt="" />
                <div className="title-banner-cart">
                    <h2 className="title-banner">My Cart</h2>
                    <div className="breadcrumb">
                        <span className="nav-cart">
                            Home
                        </span>
                        <span className="nav-cart">
                            /
                        </span>
                        <h6 className="breadcrumb-cart">
                            My Cart
                        </h6>
                    </div>
                </div>
            </div>
            <div className="container-my-cart">
                <div className="my-cart">
                    <div className="title-my-cart">
                        <h2 className="titles">My Cart</h2>
                        <div className="step-bar-cart">
                            <h6 className="step-cart-1">1. Shopping Cart</h6>
                            <h6 className="step-cart-2">2. Checkout</h6>
                            <h6 className="step-cart-3">3. Order Succesed</h6>
                        </div>
                    </div>
                    <div className="container-table-cart">
                        <table className="table-my-cart">
                            <thead className="head-table">
                                <tr className="head-title">
                                    <th className="title-table">Product Name</th>
                                    <th className="title-table">Price</th>
                                    <th className="title-table">Quantity</th>
                                    <th className="title-table">Total</th>
                                    <th className="title-table">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="info-product">
                                        <img className="cart-product-img" src="" alt="Product" />
                                        <h5 className="name-product-cart">Japan Oranges</h5>
                                    </td>
                                    <td className="product-info">$10</td>
                                    <td className="product-qty">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </td>
                                    <td className="product-total">
                                        <h5 className="price-total">$50</h5>
                                    </td>
                                    <td className="product-action">
                                        <img src="/assets/elements/trash.png" alt="Delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-product">
                                        <img className="cart-product-img" src="" alt="Product" />
                                        <h5 className="name-product-cart">Japan Oranges</h5>
                                    </td>
                                    <td className="product-info">$10</td>
                                    <td className="product-qty">
                                        <button>-</button>
                                        <span>5</span>
                                        <button>+</button>
                                    </td>
                                    <td className="product-total">
                                        <h5 className="price-total">$50</h5>
                                    </td>
                                    <td className="product-action">
                                        <img src="/assets/elements/trash.png" alt="Delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-product">
                                        <img className="cart-product-img" src="" alt="Product" />
                                        <h5 className="name-product-cart">Japan Oranges</h5>
                                    </td>
                                    <td className="product-info">$10</td>
                                    <td className="product-qty">
                                        <button>-</button>
                                        <span>5</span>
                                        <button>+</button>
                                    </td>
                                    <td className="product-total">
                                        <h5 className="price-total">$50</h5>
                                    </td>
                                    <td className="product-action">
                                        <img src="/assets/elements/trash.png" alt="Delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-product">
                                        <img className="cart-product-img" src="" alt="Product" />
                                        <h5 className="name-product-cart">Japan Oranges</h5>
                                    </td>
                                    <td className="product-info">$10</td>
                                    <td className="product-qty">
                                        <button>-</button>
                                        <span>5</span>
                                        <button>+</button>
                                    </td>
                                    <td className="product-total">
                                        <h5 className="price-total">$50</h5>
                                    </td>
                                    <td className="product-action">
                                        <img src="/assets/elements/trash.png" alt="Delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-product">
                                        <img className="cart-product-img" src="" alt="Product" />
                                        <h5 className="name-product-cart">Japan Oranges</h5>
                                    </td>
                                    <td className="product-info">$10</td>
                                    <td className="product-qty">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </td>
                                    <td className="product-total">
                                        <h5 className="price-total">$50</h5>
                                    </td>
                                    <td className="product-action">
                                        <img src="/assets/elements/trash.png" alt="Delete" />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="checkout">
                    <div className="coupon">
                        <div className="text-coupon">
                            <h5 className="have-a-coupon">Have a Coupon?</h5>
                            <input className="input-coupon" placeholder="Input your coupon here" />
                            <button className="btn-coupon">
                                <h5 className="subscribe">Subscribe</h5>
                            </button>
                        </div>
                    </div>
                    <div className="cart-totals">
                        <h5 className="carts-total">Cart Totals</h5>
                        <div className="text-cart-totals">
                            <div className="sub-cart">
                                <h6 className="subtotal-sub">Subtotal</h6>
                                <h6 className="price-subtotal">$150</h6>
                            </div>
                            <div className="shipping-cart">
                                <h6 className="shipping-sub">Shipping</h6>
                                <h6 className="option-sub">Free Shipping</h6>
                            </div>
                            <div className="addres-cart">
                                <h6 className="address-sub">Shipping to Sidney</h6>
                                <h6 className="change-sub">Change</h6>
                            </div>
                            <div className="total-cart">
                                <h6 className="total-sub">Total</h6>
                                <h6 className="full-sub">$350</h6>
                            </div>
                        </div>
                        <button className="btn-subtotal">
                            <h5 className="name-btn-subtotal">Buy Now</h5>
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}