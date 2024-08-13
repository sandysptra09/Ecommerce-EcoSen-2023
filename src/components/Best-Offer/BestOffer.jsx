import './BestOffer.css'

export default function BestOffer() {
    return (
        <div className='container-best-offer'>
            <div className='best-offer'>

                <div className='background-left'>
                    <div className='patern-background'>
                        <div className='vector-1'>
                            <img src='/assets/vector/Vector (3).png' alt='' />
                        </div>
                        <div className='vector-2'>
                            <img src='/assets/vector/Vector (6).png' alt='' />
                        </div>
                        <div className='vector-3'>
                            <img src='/assets/vector/Vector (3).png' alt='' />
                        </div>
                        <div className='vector-4'>
                            <img src='/assets/vector/Vector (4).png' alt='' />
                        </div>
                        <div className='vector-5'>
                            <img src='/assets/vector/Vector (5).png' alt='' />
                        </div>
                        <div className='vector-6'>
                            <img src='/assets/vector/Vector (6).png' alt='' />
                        </div>
                        <div className='frame'>
                            <div className='vector'>
                                <img src='  /assets/vector/frame.png' alt='' />
                            </div>
                        </div>
                        <div className='vector-7'>
                            <img src='/assets/vector/Vector (2).png' alt='' />
                        </div>
                        <div className='vector-8'>
                            <img src='/assets/vector/frame.png' alt='' />
                        </div>
                        <div className='vector-9'>
                            <img src='/assets/vector/Vector (1).png' alt='' />
                        </div>
                    </div>
                </div>

                <div className='background-right'>
                    <h1>Best Offer</h1>
                </div>

                <div className='content'>
                    <div className='best-offer-product'>
                        <div className='information-product'>
                            <h2>Guava Fruit (10 Pcs)</h2>
                            <p>These delicious Australian nuts are full of fiber, protein, and nutritions</p>
                            <div className='price'>
                                <div className='prices'>
                                    <h2>$10.00</h2>
                                    <h3>$12.00</h3>
                                </div>
                                <h4>$ 1.20/pc</h4>
                            </div>
                        </div>
                        <div className='picture'>
                            <img src='' alt='' />
                        </div>
                        <div className='under'>
                            <div className='time-sale'>
                                <img src='/assets/elements/time-sale.png' alt='' />
                                <div className='sale'>
                                    <div className='day'>
                                        <h3>20</h3>
                                        <h4>Days</h4>
                                    </div>
                                    <span>:</span>
                                    <div className='hours'>
                                        <h3>12</h3>
                                        <h4>Hours</h4>
                                    </div>
                                    <span>:</span>
                                    <div className='min'>
                                        <h3>30</h3>
                                        <h4>Mins</h4>
                                    </div>
                                    <span>:</span>
                                    <div className='sec'>
                                        <h3>45</h3>
                                        <h4>Secs</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='add-to-cart'>
                                <button>
                                    <img src='/assets/elements/cart-button.png' alt='' />
                                    <h3>ADD TO CART</h3>
                                </button>
                                <div className='dots-slider'>
                                    <img src='/assets/elements/dots-green.png' alt='Dots Slider' />
                                    <img src='/assets/elements/dots-gray.png' alt='Dots Slider' />
                                    <img src='/assets/elements/dots-gray.png' alt='Dots Slider' />
                                    <img src='/assets/elements/dots-gray.png' alt='Dots Slider' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}