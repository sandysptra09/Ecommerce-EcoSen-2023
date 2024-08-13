import './Service.css';

export default function Service() {
    return (
        <div className="container-service">
            <div className="service">
                    <div className="content-service">
                        <div className="text-service">
                            <h3 className='title-service'>We are more than multiple service</h3>
                            <h6 className='desc-service'>We offer more than one service that you can utilize. You can choose them according to your preferences.</h6>
                            <button className='button-service'>
                                <img src="/assets/elements/arrow-buttonbanner.png" alt="" />
                                About us
                            </button>
                        </div>
                        <div className="categories-service">
                            <div className="thetopline-service">
                                <div className="topleft-service">
                                    <img src="/assets/elements/freedelivery.png" alt="free delivery" />
                                    <div className="texttl-service">
                                        <h6>Free Delivery</h6>
                                        <p>Delivery to any point of the city and regions</p>
                                    </div>
                                </div>
                                <div className="topright-services">
                                    <img src="/assets/elements/easyandsecure.png" alt="Easy and Security" />
                                    <div className="texttr-service">
                                        <h6>Easy And Secure</h6>
                                        <p>Online payment with credit and debit card</p>
                                    </div>
                                </div>
                            </div>
                            <div className="thebottomline-service">
                                <div className="bottomleft-service">
                                    <img src="/assets/elements/organic.png" alt="100% organic" />
                                    <div className="textbl-service">
                                        <h6>100% Organic</h6>
                                        <p>All products are 100% organic, certified and healthy</p>
                                    </div>
                                </div>
                                <div className="bottomright-service">
                                    <img src="/assets/elements/247support.png" alt="24/7 support" />
                                    <div className="textbr-service">
                                        <h6>24/7 Support</h6>
                                        <p>Delivery to any point of the city and regions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}