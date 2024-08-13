import Header from "../../components/Header/Header";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import Footer from "../../components/Footer/Footer";
import './Shop.css';

export default function Shop() {
    return (
        <div>
            <Header/>
            <div className="intro-banner-shop">
            <img src="" alt="" />
                <div className="title-banner-shop">
                    <h2 className="title-banner">Shop</h2>
                    <div className="breadcrumb">
                        <span className="nav-shop-home">
                        <a href="Index.jsx"></a>
                            Home
                        </span>
                        <span className="nav-shop-home">
                            /
                        </span>
                        <span className="nav-shop-shop">
                            Shop
                        </span>
                    </div>
                </div>
            </div>
            <ShopComponent />
            <Footer />
        </div>
    )
}