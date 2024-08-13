import "./BestSeller.css";

export default function BestSeller() {
    return (
        <div className='container-best-seller'>
            <div className="best-seller">
                <div className="product-left">
                    <div className="title-bs">
                        <h1>Best Sellers</h1>
                    </div>
                    <div className="foto-left">
                        <img src="/img-product/healthyfood-bestseller.jpg" alt="" />
                    </div>
                </div>
                <div className="in-bestseller">
                    <div className="in1-bestseller"></div>
                    <div className="in2-bestseller">
                        <h2>In</h2>
                    </div>
                </div>
                <div className="product-right">
                    <div className="foto-right">
                        <img className="img-ourproduct" src="/img-product/healthyfood-ourproduct.jpg" alt="" />
                    </div>
                    <div className="sub-title">
                        <h3>Our Products</h3>
                        <h6>Discover our most purchased products of the day, deals and healthy products</h6>
                    </div>
                    <button><img className="button-img-bestseller" src="/assets/elements/arrow-bs.png" alt="" />EXPLORE NOW</button>
                </div>



            </div>
        </div>
    )
}