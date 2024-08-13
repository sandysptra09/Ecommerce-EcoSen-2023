import Header from "../../components/Header/Header";
import DetailProduct from '../../components/Shop-Detail/DetailProduct'
import './ProductDetail.css'

export default function ProductDetail() {
    return (
        <div>
            <Header />
            <div className="intro-banner-detail-shop">
                <img src="" alt="" />
                <div className="title-banner-detail-shop">
                    <h2 className="title-banner">Shop</h2>
                    <div className="breadcrumb">
                        <span className="nav-detail-shop">
                            Home
                        </span>
                        <span className="nav-detail-shop">
                            /
                        </span>
                        <span className="nav-detail-shop">
                            Shop
                        </span>
                        <span className="nav-detail-shop">
                            /
                        </span>
                        <h6 className="breadcrumb-detail-shop">
                            Tesco Green Seedless Grapes ( 500g)
                        </h6>
                    </div>
                </div>
            </div>
            <DetailProduct/>
        </div>
    )
}