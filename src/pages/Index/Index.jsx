import BestOffer from "../../components/Best-Offer/bestOffer";
// import BestSeller from "../../components/Best-Seller/bestSeller";
import ComboSale from "../../components/Combo-Sale/comboSale";
import NewArivval from "../../components/New-Arivval/newArivval";
import Slider from "../../components/Slider/Slider";
import TopCategories from '../../components/Top-Categories/topCategories'
import BestSeller from "../../components/Best-Seller/bestSeller";
import FamousRecipe from "../../components/Famous-Recipe/famousRecipe";
import QuestionBanner from '../../components/Question-Banner/questionBanner'
// import Service from '../../components/Service/Service'
import CustomerFeedback from "../../components/Customer-Feedback/customerFeedback";
import LatestNews from "../../components/Latest-News/latestNews";
import Service from "../../components/Service/Service";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";




export default function Index() {
    return (
        <div>
            <Header/>
            <Slider/>
            <BestOffer/>
            <TopCategories/>
            <BestSeller/>
            <NewArivval/>
            <FamousRecipe/>
            <ComboSale/>
            <QuestionBanner/>
            <CustomerFeedback/>
            <Service/>
            <LatestNews/>
            <Footer/>
        </div>
    )
}