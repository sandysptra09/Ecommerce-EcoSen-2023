import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import "./CustomerFeedback.css";

export default function CustomerFeedback() {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://192.168.1.101:9000/customer-feedback');
                setReviews(response.data)
            }
            catch (erro) {
                console.log('Error fetching Data Reviews');
            }
        }
        fetchReviews();
    }, [])

    if (!reviews) {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        )
    }

    console.log(reviews.data);

    return (
        <div className="container-customer-feedback">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {reviews.data.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="customer-feedback">
                            <div className="picture-customer">
                                <div className="background-picture"></div>
                                <img className="img-picture" src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1302/wavebreakmediamicro130203345/26724671-young-man-tasting-food-while-cooking-in-the-kitchen.jpg" alt="" />
                            </div>
                            <div className="content-left">
                                <div className="feedback-customers">
                                    <h3 className="title-feedback">Our Customers Feedbacks</h3>
                                    <div className="customer-comments">
                                        <div className="comments">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <h5 className="name-customer">{review.name}</h5>
                                                    <h6 className="job-customer">Michelin Chef</h6>
                                                    <div className="star">
                                                        <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                        <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                        <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                        <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                        <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-comment">
                                                {review.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                    <div className="customer-feedback">
                        <div className="picture-customer">
                            <div className="background-picture"></div>
                            <img className="img-picture" src="" alt="" />
                        </div>
                        <div className="content-left">
                            <div className="feedback-customers">
                                <h3 className="title-feedback">Our Customers Feedbacks</h3>
                                <div className="customer-comments">
                                    <div className="comments">
                                        <div className="rating">
                                            <div className="ratings">
                                                <h5 className="name-customer">Nyla Shaw</h5>
                                                <h6 className="job-customer">Michelin Chef</h6>
                                                <div className="star">
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-comment">
                                            Great Service and Good Quality Product and it helped my wife
                                            osteoarthritis on her knees and hips and myself for arthritis.
                                            We have asked our doctor before we used it he said it is fine
                                            because we are on other medications. We have recommended to
                                            our friends and family in United States they have order and
                                            have been using Rumatis Cream. Thank You very much.
                                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                            wisi enim ad minim veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                            consequatWhoever has invented this cream, . Kind Regards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="customer-feedback">
                        <div className="picture-customer">
                            <div className="background-picture"></div>
                            <img className="img-picture" src="" alt="" />
                        </div>
                        <div className="content-left">
                            <div className="feedback-customers">
                                <h3 className="title-feedback">Our Customers Feedbacks</h3>
                                <div className="customer-comments">
                                    <div className="comments">
                                        <div className="rating">
                                            <div className="ratings">
                                                <h5 className="name-customer">Nyla Shaw</h5>
                                                <h6 className="job-customer">Michelin Chef</h6>
                                                <div className="star">
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-comment">
                                            Great Service and Good Quality Product and it helped my wife
                                            osteoarthritis on her knees and hips and myself for arthritis.
                                            We have asked our doctor before we used it he said it is fine
                                            because we are on other medications. We have recommended to
                                            our friends and family in United States they have order and
                                            have been using Rumatis Cream. Thank You very much.
                                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                            wisi enim ad minim veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                            consequatWhoever has invented this cream, . Kind Regards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="customer-feedback">
                        <div className="picture-customer">
                            <div className="background-picture"></div>
                            <img className="img-picture" src="" alt="" />
                        </div>
                        <div className="content-left">
                            <div className="feedback-customers">
                                <h3 className="title-feedback">Our Customers Feedbacks</h3>
                                <div className="customer-comments">
                                    <div className="comments">
                                        <div className="rating">
                                            <div className="ratings">
                                                <h5 className="name-customer">Nyla Shaw</h5>
                                                <h6 className="job-customer">Michelin Chef</h6>
                                                <div className="star">
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                    <img className="icon-star" src="/assets/elements/rating.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-comment">
                                            Great Service and Good Quality Product and it helped my wife
                                            osteoarthritis on her knees and hips and myself for arthritis.
                                            We have asked our doctor before we used it he said it is fine
                                            because we are on other medications. We have recommended to
                                            our friends and family in United States they have order and
                                            have been using Rumatis Cream. Thank You very much.
                                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                            wisi enim ad minim veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                            consequatWhoever has invented this cream, . Kind Regards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>

        </div>
    );
}
