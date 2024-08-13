import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import './Auth.css';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetToken, setResetToken] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token')
        setResetToken(token)
    }, [])

    const handleConfirmPassword = async () => {
        try {
            const response = await axios.post(
                "http://192.168.1.101:9000/auth/reset-password",
                { password: newPassword, token: resetToken },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Successful',
                text: 'Your password has been reset successfully!',
            });
            navigate('/login')

        } catch (error) {
            console.log('');
            Swal.fire({
                icon: 'error',
                title: 'Password Reset Failed',
                text: 'Failed to reset password. Please try again.',
            });
        }
    }

    return (
        <div className="container">
            <div className="container-resetpassword">
                <div className="box-1">
                    <a href="/">
                        <img src="/ecosen-logo.png" alt="" />
                    </a>

                    <div className="resetpassword">
                        <div className="auth-title">
                            <h1>Reset Password</h1>
                            <p>Facilisis nec netus nullam rutrum nisl amet elementum felis in. Arcu.</p>
                        </div>

                        <div className="auth-input">
                            <div className="label-input">
                                <div className="input-newpass">
                                    <label>Password Baru</label>
                                    <input
                                        placeholder="Tulis di sini"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div className="input-confirm-newpass">
                                    <label>Konfirmasi Password Baru</label>
                                    <input
                                        placeholder="Tulis di sini"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                <Link to='/forget-password' className='to-forget-password'>Lupa password?</Link>

                                </div>

                                <button className='btn-resetpassword' onClick={handleConfirmPassword}>Submit</button>
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
                        className='mySwiper'
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
    )
}
