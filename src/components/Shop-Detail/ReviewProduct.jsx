import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewProduct.css'

const ReviewProductProduct = ({ id }) => {
    const [review, setReview] = useState({
        product_id: parseInt(id),
        email: '',
        name: '',
        title: '',
        rating: '',
        review: ''
    });

    // Fungsi untuk menangani perubahan nilai input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReview(prevReview => ({
            ...prevReview,
            [name]: value
        }));
    };

    // Fungsi untuk menangani pengiriman review
    const submitReview = async () => {
        try {
            // Lakukan validasi di sini jika diperlukan
            const token = localStorage.getItem('token');
            // Kirim review ke server menggunakan Axios
            const response = await axios.post('http://192.168.1.101:9000/reviews', review,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
            console.log('Review successfully submitted:', response.data);

            // reset state
            setReview({
                product_id: id,
                email: '',
                name: '',
                title: '',
                rating: '',
                review: ''
            });
        } catch (error) {
            console.error('Error submitting review:', error);

        }
    };


    const [related, setRelated] = useState(null)
    const [reviewProduct, setReviewProduct] = useState(null);

    useEffect(() => {
        const fetchRelatedProduct = async () => {
            try {
                const response = await axios.get('http://192.168.1.101:9000/product')
                setRelated(response.data);
                // console.log(response.data);
            }
            catch (error) {
                console.log('Error fetching data related product');
            }
        }

        

        fetchRelatedProduct()
    }, [])

    const fetchReviewProduct = async () => {
        const token = localStorage.getItem('token');

        try {
            
            const responseReview = await axios.get(`http://192.168.1.101:9000/reviews/${id}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                })
            setReviewProduct(responseReview?.data)
            console.log(responseReview?.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        
        fetchReviewProduct()

    }, [])

    if (!related) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    // console.log(reviewProduct?.data);

    if (!reviewProduct) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="container-review-product">
            <div className="review-product">
                {reviewProduct?.data.map((review) => (
                    <div className='reviewssss' key={review.id}>
                        <div className="evaluate" >
                            <div className="evaluate-filter">
                                <div className="this-evaluate">
                                    <h6 className="title-evaluate">5 out of 5</h6>
                                    <div className="star-rating-evaluate">
                                        <div className='rating-icon-evaluate'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.6775 1.20521C11.02 0.386446 12.18 0.386448 12.5225 1.20521L15.046 7.23732C15.1883 7.57754 15.5064 7.81181 15.8735 7.84686L22.2761 8.45816C23.1416 8.54078 23.4966 9.61221 22.8518 10.1953L17.98 14.6011C17.714 14.8416 17.5971 15.2063 17.6739 15.5566L19.0926 22.0369C19.281 22.8972 18.3457 23.5633 17.5942 23.104L12.1215 19.7588C11.8014 19.5631 11.3986 19.5631 11.0785 19.7588L5.60576 23.104C4.8543 23.5633 3.919 22.8972 4.10736 22.0369L5.52615 15.5566C5.60286 15.2063 5.48605 14.8416 5.22002 14.6011L0.348175 10.1953C-0.296638 9.61221 0.0584273 8.54078 0.923867 8.45816L7.32651 7.84686C7.69363 7.81181 8.01167 7.57754 8.15399 7.23732L10.6775 1.20521Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.6775 1.20521C11.02 0.386446 12.18 0.386448 12.5225 1.20521L15.046 7.23732C15.1883 7.57754 15.5064 7.81181 15.8735 7.84686L22.2761 8.45816C23.1416 8.54078 23.4966 9.61221 22.8518 10.1953L17.98 14.6011C17.714 14.8416 17.5971 15.2063 17.6739 15.5566L19.0926 22.0369C19.281 22.8972 18.3457 23.5633 17.5942 23.104L12.1215 19.7588C11.8014 19.5631 11.3986 19.5631 11.0785 19.7588L5.60576 23.104C4.8543 23.5633 3.919 22.8972 4.10736 22.0369L5.52615 15.5566C5.60286 15.2063 5.48605 14.8416 5.22002 14.6011L0.348175 10.1953C-0.296638 9.61221 0.0584273 8.54078 0.923867 8.45816L7.32651 7.84686C7.69363 7.81181 8.01167 7.57754 8.15399 7.23732L10.6775 1.20521Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.6775 1.20521C11.02 0.386446 12.18 0.386448 12.5225 1.20521L15.046 7.23732C15.1883 7.57754 15.5064 7.81181 15.8735 7.84686L22.2761 8.45816C23.1416 8.54078 23.4966 9.61221 22.8518 10.1953L17.98 14.6011C17.714 14.8416 17.5971 15.2063 17.6739 15.5566L19.0926 22.0369C19.281 22.8972 18.3457 23.5633 17.5942 23.104L12.1215 19.7588C11.8014 19.5631 11.3986 19.5631 11.0785 19.7588L5.60576 23.104C4.8543 23.5633 3.919 22.8972 4.10736 22.0369L5.52615 15.5566C5.60286 15.2063 5.48605 14.8416 5.22002 14.6011L0.348175 10.1953C-0.296638 9.61221 0.0584273 8.54078 0.923867 8.45816L7.32651 7.84686C7.69363 7.81181 8.01167 7.57754 8.15399 7.23732L10.6775 1.20521Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.6775 1.20521C11.02 0.386446 12.18 0.386448 12.5225 1.20521L15.046 7.23732C15.1883 7.57754 15.5064 7.81181 15.8735 7.84686L22.2761 8.45816C23.1416 8.54078 23.4966 9.61221 22.8518 10.1953L17.98 14.6011C17.714 14.8416 17.5971 15.2063 17.6739 15.5566L19.0926 22.0369C19.281 22.8972 18.3457 23.5633 17.5942 23.104L12.1215 19.7588C11.8014 19.5631 11.3986 19.5631 11.0785 19.7588L5.60576 23.104C4.8543 23.5633 3.919 22.8972 4.10736 22.0369L5.52615 15.5566C5.60286 15.2063 5.48605 14.8416 5.22002 14.6011L0.348175 10.1953C-0.296638 9.61221 0.0584273 8.54078 0.923867 8.45816L7.32651 7.84686C7.69363 7.81181 8.01167 7.57754 8.15399 7.23732L10.6775 1.20521Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.6775 1.20521C11.02 0.386446 12.18 0.386448 12.5225 1.20521L15.046 7.23732C15.1883 7.57754 15.5064 7.81181 15.8735 7.84686L22.2761 8.45816C23.1416 8.54078 23.4966 9.61221 22.8518 10.1953L17.98 14.6011C17.714 14.8416 17.5971 15.2063 17.6739 15.5566L19.0926 22.0369C19.281 22.8972 18.3457 23.5633 17.5942 23.104L12.1215 19.7588C11.8014 19.5631 11.3986 19.5631 11.0785 19.7588L5.60576 23.104C4.8543 23.5633 3.919 22.8972 4.10736 22.0369L5.52615 15.5566C5.60286 15.2063 5.48605 14.8416 5.22002 14.6011L0.348175 10.1953C-0.296638 9.61221 0.0584273 8.54078 0.923867 8.45816L7.32651 7.84686C7.69363 7.81181 8.01167 7.57754 8.15399 7.23732L10.6775 1.20521Z" fill="#FFD400" />
                                            </svg>
                                        </div>
                                        <h6 className='total-evaluate'>1 review</h6>
                                    </div>
                                </div>
                                <div className="this-filter">
                                    <h6 className='title-filter'>
                                        Sort:
                                    </h6>
                                    <div className='newest'>
                                        <h6 className='title-newest'>Newest</h6>
                                        <img className='icon-newesr' src='/assets/elements/icon-filter-newest.png' alt='' />
                                    </div>
                                </div>
                            </div>
                            <img className="divider" src="/assets/elements/divider.png" alt="" />
                        </div>
                        <div className="comment-and-rate">
                            <div>
                                <div className='comment-rate'>
                                    <div className='customer-feedback-rate'>
                                        <h6 className='date-review'>Sandy Saputra</h6>
                                        <div className='star-rating-review'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M8.08155 1.13274C8.42863 0.326779 9.57137 0.326779 9.91845 1.13274L11.469 4.73316C11.6137 5.06934 11.9306 5.29956 12.2951 5.33336L16.1984 5.69538C17.0722 5.77642 17.4253 6.86323 16.766 7.44239L13.821 10.0296C13.546 10.2712 13.4249 10.6437 13.5054 11.0007L14.3673 14.8249C14.5602 15.6809 13.6357 16.3526 12.8812 15.9046L9.51056 13.9032C9.19584 13.7163 8.80416 13.7163 8.48944 13.9032L5.11879 15.9046C4.36426 16.3526 3.43976 15.6809 3.6327 14.8249L4.49459 11.0007C4.57506 10.6437 4.45403 10.2712 4.17904 10.0296L1.23398 7.44239C0.574713 6.86323 0.92784 5.77642 1.80161 5.69538L5.70494 5.33336C6.0694 5.29956 6.38627 5.06934 6.53105 4.73316L8.08155 1.13274Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M8.08155 1.13274C8.42863 0.326779 9.57137 0.326779 9.91845 1.13274L11.469 4.73316C11.6137 5.06934 11.9306 5.29956 12.2951 5.33336L16.1984 5.69538C17.0722 5.77642 17.4253 6.86323 16.766 7.44239L13.821 10.0296C13.546 10.2712 13.4249 10.6437 13.5054 11.0007L14.3673 14.8249C14.5602 15.6809 13.6357 16.3526 12.8812 15.9046L9.51056 13.9032C9.19584 13.7163 8.80416 13.7163 8.48944 13.9032L5.11879 15.9046C4.36426 16.3526 3.43976 15.6809 3.6327 14.8249L4.49459 11.0007C4.57506 10.6437 4.45403 10.2712 4.17904 10.0296L1.23398 7.44239C0.574713 6.86323 0.92784 5.77642 1.80161 5.69538L5.70494 5.33336C6.0694 5.29956 6.38627 5.06934 6.53105 4.73316L8.08155 1.13274Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M8.08155 1.13274C8.42863 0.326779 9.57137 0.326779 9.91845 1.13274L11.469 4.73316C11.6137 5.06934 11.9306 5.29956 12.2951 5.33336L16.1984 5.69538C17.0722 5.77642 17.4253 6.86323 16.766 7.44239L13.821 10.0296C13.546 10.2712 13.4249 10.6437 13.5054 11.0007L14.3673 14.8249C14.5602 15.6809 13.6357 16.3526 12.8812 15.9046L9.51056 13.9032C9.19584 13.7163 8.80416 13.7163 8.48944 13.9032L5.11879 15.9046C4.36426 16.3526 3.43976 15.6809 3.6327 14.8249L4.49459 11.0007C4.57506 10.6437 4.45403 10.2712 4.17904 10.0296L1.23398 7.44239C0.574713 6.86323 0.92784 5.77642 1.80161 5.69538L5.70494 5.33336C6.0694 5.29956 6.38627 5.06934 6.53105 4.73316L8.08155 1.13274Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M8.08155 1.13274C8.42863 0.326779 9.57137 0.326779 9.91845 1.13274L11.469 4.73316C11.6137 5.06934 11.9306 5.29956 12.2951 5.33336L16.1984 5.69538C17.0722 5.77642 17.4253 6.86323 16.766 7.44239L13.821 10.0296C13.546 10.2712 13.4249 10.6437 13.5054 11.0007L14.3673 14.8249C14.5602 15.6809 13.6357 16.3526 12.8812 15.9046L9.51056 13.9032C9.19584 13.7163 8.80416 13.7163 8.48944 13.9032L5.11879 15.9046C4.36426 16.3526 3.43976 15.6809 3.6327 14.8249L4.49459 11.0007C4.57506 10.6437 4.45403 10.2712 4.17904 10.0296L1.23398 7.44239C0.574713 6.86323 0.92784 5.77642 1.80161 5.69538L5.70494 5.33336C6.0694 5.29956 6.38627 5.06934 6.53105 4.73316L8.08155 1.13274Z" fill="#FFD400" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M8.08155 1.13274C8.42863 0.326779 9.57137 0.326779 9.91845 1.13274L11.469 4.73316C11.6137 5.06934 11.9306 5.29956 12.2951 5.33336L16.1984 5.69538C17.0722 5.77642 17.4253 6.86323 16.766 7.44239L13.821 10.0296C13.546 10.2712 13.4249 10.6437 13.5054 11.0007L14.3673 14.8249C14.5602 15.6809 13.6357 16.3526 12.8812 15.9046L9.51056 13.9032C9.19584 13.7163 8.80416 13.7163 8.48944 13.9032L5.11879 15.9046C4.36426 16.3526 3.43976 15.6809 3.6327 14.8249L4.49459 11.0007C4.57506 10.6437 4.45403 10.2712 4.17904 10.0296L1.23398 7.44239C0.574713 6.86323 0.92784 5.77642 1.80161 5.69538L5.70494 5.33336C6.0694 5.29956 6.38627 5.06934 6.53105 4.73316L8.08155 1.13274Z" fill="#FFD400" />
                                            </svg>
                                        </div>
                                        <div className='date-review-product'>
                                            <h6 className='date-month-year'>Aug 22, 2023</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                                <path d="M1 0L1 14" stroke="#727272" />
                                            </svg>
                                            <h6 className='total-classification'>classification: 2 Pcs</h6>
                                        </div>
                                        <h6 className='title-review-product'>Good quality product</h6>
                                        <h6 className='text-review-rate-product'>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
                                        </h6>
                                    </div>
                                </div>
                                <div className='picture-rate'>
                                    <img className='review-product-img' src='' alt='' />
                                    <img className='review-product-img' src='' alt='' />
                                    <img className='review-product-img' src='' alt='' />
                                </div>
                                <div className='reply-rate'>
                                    <div className='reply-like'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 24 25" fill="none">
                                            <path d="M5.6 20H6.4V9.05263H5.6C5.17565 9.05263 4.76869 9.23007 4.46863 9.54593C4.16857 9.86178 4 10.2902 4 10.7368V18.3158C4 18.7625 4.16857 19.1909 4.46863 19.5067C4.76869 19.8226 5.17565 20 5.6 20ZM18.4 9.05263H12.8L13.6976 6.21642C13.7777 5.9633 13.7995 5.69376 13.7613 5.43003C13.723 5.16629 13.6258 4.91589 13.4776 4.69945C13.3294 4.48301 13.1345 4.30673 12.9089 4.18512C12.6833 4.06352 12.4335 4.00007 12.18 4H12L8 8.57937V20H16.8L19.9296 12.7613L20 12.4211V10.7368C20 10.2902 19.8314 9.86178 19.5314 9.54593C19.2313 9.23007 18.8243 9.05263 18.4 9.05263Z" fill="#727272" />
                                        </svg>
                                        <span className='total-reply-like'>0</span>
                                    </div>
                                    <div className='reply-comments'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 24 25" fill="none">
                                            <path d="M17.1429 5C18.7208 5 20 6.38568 20 8.09499V14.285C20 15.9943 18.7208 17.38 17.1429 17.38H16.5714V19.7844C16.5714 20.8268 15.4381 21.3839 14.7139 20.6974L11.2139 17.38H6.85714C5.2792 17.38 4 15.9943 4 14.285V8.09499C4 6.38568 5.2792 5 6.85714 5H17.1429Z" fill="#727272" />
                                        </svg>
                                        <h6 className='total-rate-reply'>0</h6>
                                        <div className='btn-rate-reply'>
                                            <h6 className='input-text-reply'>reply</h6>
                                            <img className='rectangle-reply' src='/assets/elements/input-reply.png' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="add-a-comment">
                    <div className='add-review-product'>
                        <h3 className='title-add-review'>Add A Review</h3>
                        <h6 className='text-add-review'>You email address will not be published. Required fields are marked</h6>
                    </div>
                    <div className='add-review-score'>
                        <h5>Score :</h5>
                        <div className='input-score-review'>
                            <input
                                className='add-score'
                                type='number'
                                name='rating'
                                value={review.rating}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='add-review-star'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                            <path d="M10.6826 1.1146C11.0308 0.311926 12.1692 0.311928 12.5174 1.1146L15.0414 6.93252C15.1868 7.26765 15.5033 7.49683 15.8671 7.53032L22.2082 8.11411C23.0841 8.19475 23.4367 9.28548 22.7737 9.86358L18 14.0264C17.7227 14.2682 17.6006 14.6427 17.6821 15.0015L19.0809 21.1624C19.275 22.0174 18.3532 22.6905 17.5979 22.2453L12.1078 19.0093C11.7944 18.8246 11.4056 18.8246 11.0922 19.0093L5.60206 22.2453C4.84676 22.6905 3.92498 22.0174 4.1191 21.1624L5.51793 15.0015C5.59939 14.6427 5.47727 14.2682 5.19999 14.0264L0.426257 9.86358C-0.236681 9.28548 0.115925 8.19475 0.991815 8.11411L7.33289 7.53032C7.69665 7.49683 8.01321 7.26765 8.1586 6.93252L10.6826 1.1146Z" fill="#FFD400" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                            <path d="M10.6826 1.1146C11.0308 0.311926 12.1692 0.311928 12.5174 1.1146L15.0414 6.93252C15.1868 7.26765 15.5033 7.49683 15.8671 7.53032L22.2082 8.11411C23.0841 8.19475 23.4367 9.28548 22.7737 9.86358L18 14.0264C17.7227 14.2682 17.6006 14.6427 17.6821 15.0015L19.0809 21.1624C19.275 22.0174 18.3532 22.6905 17.5979 22.2453L12.1078 19.0093C11.7944 18.8246 11.4056 18.8246 11.0922 19.0093L5.60206 22.2453C4.84676 22.6905 3.92498 22.0174 4.1191 21.1624L5.51793 15.0015C5.59939 14.6427 5.47727 14.2682 5.19999 14.0264L0.426257 9.86358C-0.236681 9.28548 0.115925 8.19475 0.991815 8.11411L7.33289 7.53032C7.69665 7.49683 8.01321 7.26765 8.1586 6.93252L10.6826 1.1146Z" fill="#FFD400" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                            <path d="M10.6826 1.1146C11.0308 0.311926 12.1692 0.311928 12.5174 1.1146L15.0414 6.93252C15.1868 7.26765 15.5033 7.49683 15.8671 7.53032L22.2082 8.11411C23.0841 8.19475 23.4367 9.28548 22.7737 9.86358L18 14.0264C17.7227 14.2682 17.6006 14.6427 17.6821 15.0015L19.0809 21.1624C19.275 22.0174 18.3532 22.6905 17.5979 22.2453L12.1078 19.0093C11.7944 18.8246 11.4056 18.8246 11.0922 19.0093L5.60206 22.2453C4.84676 22.6905 3.92498 22.0174 4.1191 21.1624L5.51793 15.0015C5.59939 14.6427 5.47727 14.2682 5.19999 14.0264L0.426257 9.86358C-0.236681 9.28548 0.115925 8.19475 0.991815 8.11411L7.33289 7.53032C7.69665 7.49683 8.01321 7.26765 8.1586 6.93252L10.6826 1.1146Z" fill="#FFD400" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                            <path d="M10.6826 1.1146C11.0308 0.311926 12.1692 0.311928 12.5174 1.1146L15.0414 6.93252C15.1868 7.26765 15.5033 7.49683 15.8671 7.53032L22.2082 8.11411C23.0841 8.19475 23.4367 9.28548 22.7737 9.86358L18 14.0264C17.7227 14.2682 17.6006 14.6427 17.6821 15.0015L19.0809 21.1624C19.275 22.0174 18.3532 22.6905 17.5979 22.2453L12.1078 19.0093C11.7944 18.8246 11.4056 18.8246 11.0922 19.0093L5.60206 22.2453C4.84676 22.6905 3.92498 22.0174 4.1191 21.1624L5.51793 15.0015C5.59939 14.6427 5.47727 14.2682 5.19999 14.0264L0.426257 9.86358C-0.236681 9.28548 0.115925 8.19475 0.991815 8.11411L7.33289 7.53032C7.69665 7.49683 8.01321 7.26765 8.1586 6.93252L10.6826 1.1146Z" fill="#FFD400" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                            <path d="M10.6826 1.1146C11.0308 0.311926 12.1692 0.311928 12.5174 1.1146L15.0414 6.93252C15.1868 7.26765 15.5033 7.49683 15.8671 7.53032L22.2082 8.11411C23.0841 8.19475 23.4367 9.28548 22.7737 9.86358L18 14.0264C17.7227 14.2682 17.6006 14.6427 17.6821 15.0015L19.0809 21.1624C19.275 22.0174 18.3532 22.6905 17.5979 22.2453L12.1078 19.0093C11.7944 18.8246 11.4056 18.8246 11.0922 19.0093L5.60206 22.2453C4.84676 22.6905 3.92498 22.0174 4.1191 21.1624L5.51793 15.0015C5.59939 14.6427 5.47727 14.2682 5.19999 14.0264L0.426257 9.86358C-0.236681 9.28548 0.115925 8.19475 0.991815 8.11411L7.33289 7.53032C7.69665 7.49683 8.01321 7.26765 8.1586 6.93252L10.6826 1.1146Z" fill="#FFD400" />
                        </svg>
                    </div>
                    <div className='add-input-comments-review'>
                        <div className='add-name-review'>
                            <div className='add-your-email'>
                                <input
                                    className='input-your-email'
                                    type='email'
                                    name='email'
                                    value={review.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder='Your email*'
                                />
                            </div>

                            <div className='add-your-name'>
                                <input
                                    className='input-your-name'
                                    type='text'
                                    name='name'
                                    value={review.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder='Your name*'
                                />
                            </div>

                        </div>

                        <div className='add-your-title-review'>
                            <input
                                className='input-your-title-review'
                                type='text'
                                name='title'
                                value={review.title}
                                onChange={handleInputChange}
                                placeholder='Your title review*' required />
                        </div>

                        <div className='add-comment-review'>
                            <textarea
                                className='input-your-comment'
                                name='review'
                                value={review.review}
                                onChange={handleInputChange}
                                placeholder='Your comment*'
                                required />
                        </div>
                    </div>

                    <button className='write-your-review' onClick={submitReview}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.00449 15.8891L10.3913 15.4891L18.7411 7.03967C18.807 6.97219 18.8437 6.8815 18.8432 6.7872C18.8428 6.69291 18.8053 6.60257 18.7388 6.5357L18.2387 6.03016C18.2064 5.99696 18.1678 5.97052 18.1251 5.9524C18.0825 5.93428 18.0367 5.92483 17.9903 5.92461C17.944 5.9244 17.8981 5.93341 17.8553 5.95112C17.8125 5.96884 17.7736 5.9949 17.741 6.02779L9.4132 14.4551L9.00371 15.8883L9.00449 15.8891ZM19.2286 5.02852L19.7287 5.53485C20.4185 6.23332 20.4248 7.36017 19.7413 8.05155L11.137 16.7592L8.17289 17.6128C7.99192 17.6635 7.79825 17.6403 7.63437 17.5483C7.47049 17.4563 7.3498 17.3031 7.29877 17.1222C7.2608 16.9922 7.26025 16.8541 7.2972 16.7238L8.15951 13.7L16.7409 5.01513C16.9041 4.85083 17.0983 4.72067 17.3123 4.63223C17.5263 4.54379 17.7558 4.49885 17.9874 4.50002C18.2189 4.5012 18.448 4.54846 18.6611 4.63906C18.8742 4.72966 19.0671 4.86258 19.2286 5.02852ZM10.1574 5.93645C10.548 5.93645 10.8646 6.25694 10.8646 6.65225C10.8652 6.74569 10.8474 6.83834 10.8122 6.9249C10.777 7.01146 10.725 7.09024 10.6594 7.15671C10.5937 7.22319 10.5155 7.27607 10.4294 7.31234C10.3433 7.3486 10.2508 7.36753 10.1574 7.36804H7.3287C6.5475 7.36804 5.91435 8.00903 5.91435 8.79885V17.3868C5.91435 18.1774 6.5475 18.8184 7.3287 18.8184H15.8148C16.596 18.8184 17.2299 18.1774 17.2299 17.3868V14.5244C17.2299 14.1291 17.5465 13.8086 17.9371 13.8086C18.3277 13.8086 18.6443 14.1291 18.6443 14.5252V17.3868C18.6443 18.968 17.3772 20.25 15.8148 20.25H7.3287C5.7663 20.25 4.5 18.968 4.5 17.3868V8.79885C4.5 7.21843 5.7663 5.93645 7.3287 5.93645H10.1574Z" fill="white" />
                        </svg>
                        <h6 className='title-write-review'>
                            Write your review
                        </h6>
                    </button>
                </div>
            </div>
            <div className='container-related-product'>
                <div className='related-products'>
                    <h3 className='tite-desc-related-product'>
                        Related products
                    </h3>
                    <div className='product-related'>
                        {related.data.map((itemRelated) => (
                            <div className='card-related-product' key={itemRelated.id}>
                                <img className='img-related-product' src='' alt='' />
                                <div className='information-related-product'>
                                    <div className='left-side-information-related'>
                                        <div className='name-of-related-product'>
                                            <h5 className='title-related-product'>Orange (10 Pcs)</h5>
                                            <h6 className='pcs-related-product'>$ 1.20/pc</h6>
                                        </div>
                                        <div className='price-of-related-product'>
                                            <h5 className='price-related-product'>$10.00</h5>
                                            <h6 className='discon-related-product'>$12.00</h6>
                                        </div>
                                    </div>
                                    <button className='add-cart-related'>
                                        <img className='icon-add-cart-related' src='/assets/elements/add-cart.png' alt='' />
                                    </button>
                                </div>
                                <div className='tag-product-card-related'>
                                    <div className='tag-discount-related'>
                                        <h6 className='title-discount-related'>-5%</h6>
                                    </div>
                                    <div className='tag-new-related'>
                                        <h6 className='title-new-related'>New</h6>
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewProductProduct;