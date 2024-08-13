import './Footer.css'

export default function Footer() {
    return (
        <div className='container-footer'>
            <footer className='footer'>
                <div className='left-footer'>
                    <h4 className='follow'>Follow</h4>
                    <div className='logo-social'>
                        <div className='logo-fb'>
                            <a href='' >
                                <img className='fb' src='/assets/elements/fb.png' alt='' />
                            </a>
                        </div>
                        <div className='logo-ig'>
                            <a href='' >
                                <img className='ig' src='/assets/elements/ig.png' alt='' />
                            </a>
                        </div>
                        <div className='logo-pn'>
                            <a href='' >
                                <img className='pn' src='/assets/elements/pn.png' alt='' />
                            </a>
                        </div>
                        <div className='logo-tw'>
                            <a href='' >
                                <img className='tw' src='/assets/elements/tw.png' alt='' />
                            </a>
                        </div>
                        <a href='' >
                            <img className='tk' src='/assets/elements/tk.png' alt='' />
                        </a>
                    </div>
                </div>

                <div className='middle-footer'>
                    <div className='categories'>
                        <div className='user-area'>
                            <h6 className='text-user-area'>User Area</h6>
                            <div className='the-categories'>
                                <h6 className='text-categories'>My Account</h6>
                                <h6 className='text-categories'>My Cart</h6>
                                <h6 className='text-categories'>Login</h6>
                                <h6 className='text-categories'>Checkout</h6>
                            </div>
                        </div>
                        <div className='shopping-guide'>
                            <h6 className='text-shopping-guide'>Shopping Guide</h6>
                            <div className='the-categories'>
                                <h6 className='text-categories'>Payment</h6>
                                <h6 className='text-categories'>Shipment</h6>
                                <h6 className='text-categories'>FAQ</h6>
                                <h6 className='text-categories'>Return Policy</h6>
                            </div>
                        </div>
                        <div className='site-map'>
                            <h6 className='text-site-map'>Site Map</h6>
                            <div className='the-categories'>
                                <h6 className='text-categories'>Shop</h6>
                                <h6 className='text-categories'>Products</h6>
                                <h6 className='text-categories'>Blog</h6>
                                <h6 className='text-categories'>About Us</h6>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <div className='frame-copyright'>
                            <img className='icon-copyright' src='/assets/elements/copyright.png' alt='' />
                            <h6 className='text-copyright'>Copyright 2023, Designed By BZOTech.com</h6>
                        </div>
                    </div>
                    <div className='vector-footer'>
                        <img className='vector-img' src='/assets/elements/vector-copyright.png' alt='' />
                    </div>
                </div>

                <div className='right-footer'>
                    <div className='vector-right-footer'>
                        <img className='right-footer-vector' src='/assets/elements/vector-right-footer.png' alt='' />
                    </div>
                    <div className='contact-detail'>
                        <h6 className='title-detail'>Contact Detail</h6>
                        <div className='communication'>
                            <div className='map'>
                                <img className='img-communication' src='/assets/elements/map.png' alt='' />
                                <h6 className='title-communication'>600 N Washington
                                    Ave Suite C203</h6>
                            </div>
                            <div className='map'>
                                <img className='img-communication' src='/assets/elements/call.png' alt='' />
                                <div className='call'>
                                    <h6 className='text-call'>+008 0642 118</h6>
                                    <h6 className='text-call'>+008 0767 342</h6>
                                </div>
                            </div>
                            <div className='map'>
                                <img className='img-communication' src='/assets/elements/Mail.png' alt='' />
                                <div className='email'>
                                    <h6 className='text-email'>ecosen@gmail.com</h6>
                                    <h6 className='text-email'>ecosenservice@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='payment-option'>

                    </div> */}
                </div>
            </footer>
        </div>
    )
}