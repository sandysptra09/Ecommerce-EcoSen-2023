import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import "./Auth.css";

export default function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [resetToken, setResetToken] = useState('')

    const handleForgetPassword = async () => {
        try {
            const response = await axios.post(
                "http://192.168.1.101:9000/auth/forget-password",
                { email },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data.token) {
                setResetToken(response.data.token)
            }
            console.log("Password reset email sent successfully:", response.data);

            Swal.fire({
                icon: 'success',
                title: '<span class="swal-title">Email Sent</span>',
                text: 'We have sent you an email with instructions to reset your password.',
            });

            setEmail("");
        } catch (error) {
            console.error("Failed to send password reset email:", error);

            Swal.fire({
                icon: 'error',
                title: '<span class="swal-title">Error</span>',
                text: 'Failed to send password reset email. Please check your email and try again.',
            });
        }
    };

    return (
        <div className="container">
            <div className="container-forgetpassword">
                <div className="box-1">
                    <a href="/">
                        <img src="/ecosen-logo.png" alt="" />
                    </a>

                    <div className="forgetpassword">
                        <div className="arrow-back">
                            <a href="/login">
                                <img src="../assets/elements/arrow_back.png" alt="" />
                            </a>
                        </div>
                        <div className="auth-title">
                            <h1>Lupa Password</h1>
                            <p>
                                Masukkan email anda untuk dikirimkan tautan pemulihan Password!
                            </p>
                        </div>

                        <div className="auth-input">
                            <div className="label-input">
                                <div className="input-email">
                                    <label>Email</label>
                                    <input
                                        placeholder="Tulis di sini"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Link to='/login' className='to-login'>Ingat Password?</Link>

                                </div>

                                <button
                                    className="btn-forgetpassword"
                                    onClick={handleForgetPassword}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-2">
                    <Swiper
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="auth-image">
                                <img src="/auth/auth-healthy-foods.jpg" alt="Auth Image" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="auth-image">
                                <img src="/auth/auth-healthy-foods.jpg" alt="Auth Image" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="auth-image">
                                <img src="/auth/auth-healthy-foods.jpg" alt="Auth Image" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
