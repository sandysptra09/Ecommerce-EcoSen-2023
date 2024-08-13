import { useState, useEffect } from 'react';
import axios from 'axios';
import "./ComboSale.css";

export default function ComboSale() {
    const [productSale, setProductSale] = useState(null)

    useEffect(() => {
        const fetchCombosale = async () => {
            try{
                const response = await axios.get('http://192.168.1.101:9000/product?page=1&limit=3')
                setProductSale(response.data)
            }
            catch{
                console.log('error fetching product combo sale');
            }
        }
        fetchCombosale()
    }, [])

    if (!productSale) {
        return(
            <div className="loading-page">
                <h5>Loading...</h5>
            </div>
        )
    }


    return (
        <div className="container-combosale">
            <div className="combo-sale">
                <div className="picture-combo"><img src="/img-product/healthyfood-combosale.jpg" alt="" /></div>
                <div className="product-set">
                    <h3>Buy together get more discount</h3>
                    <div className="price">
                        <h5>Combo Seafood:</h5>
                        <div className="price-1">
                            <h3>$24.00</h3>
                            <p>$29.99</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-left">
                            {productSale.data.map((saleProduct) => (
                                <div className="product-combo" key={saleProduct.id}>
                                <div className="information-product">
                                    <img src={saleProduct.product_image} alt="" />
                                    <div className="product-name">
                                        <p className="pn">{saleProduct.product_name}</p>
                                        <p className="pp">{saleProduct.detail_price}</p>
                                        <div className="price-product">
                                            <h6>{saleProduct.price}</h6>
                                            <p>{saleProduct.discount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="product-right">
                        {productSale.data.map((saleProduct) => (
                                <div className="product-combo" key={saleProduct.id}>
                                <div className="information-product">
                                    <img src={saleProduct.product_image} alt="" />
                                    <div className="product-name">
                                        <p className="pn">{saleProduct.product_name}</p>
                                        <p className="pp">{saleProduct.detail_price}</p>
                                        <div className="price-product">
                                            <h6>{saleProduct.price}</h6>
                                            <p>{saleProduct.discount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="button">
                        <button><img src="/assets/elements/cart-cs.png" alt="" />Buy combo</button>
                        <div className="move-button">
                            <img src="/assets/elements/mb-gray.png" alt="" />
                            <img src="/assets/elements/mb-green.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}