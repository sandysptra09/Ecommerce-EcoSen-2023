import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import React, { useState } from 'react';
import axios from 'axios';

import './Auth.css';

export default function Login() {
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.101:9000/auth/login', {
                email,
                password,
            });

            console.log('Login successful:', response.data);
            setEmail('');
            setPassword('');

            localStorage.setItem('token', response.data.token)

            navigate('/')
            Swal.fire({
                icon: 'success',
                title: '<span class="swal-title">Login Successful</span>',
                text: 'Welcome back!',
            });

        } catch (error) {
            console.log('Failed to login!', error);
            Swal.fire({
                icon: 'error',
                title: '<span class="swal-title">Login Failed!</span>',
                text: 'Invalid email or password.',
            });
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='box-1'>
                    <a href='/'>
                        <img src='/ecosen-logo.png' alt='' />
                    </a>

                    <div className='login'>
                        <div className='auth-title'>
                            <h1>Login</h1>
                            <p>Masukan email dan password disini</p>
                        </div>

                        <div className='auth-input'>
                            <div className='label-input'>
                                <div className='input-email'>
                                    <label>Email</label>
                                    <input
                                        placeholder='Tulis email Anda'
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='input-password'>
                                    <label>Password</label>
                                    <input
                                        placeholder='Tulis kata sandi Anda'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <Link to='/forget-password' className='to-forget-password'>Lupa Kata Sandi?</Link>
                                </div>

                                <button className='btn-login' onClick={handleLogin}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box-2'>
                    <Swiper
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        <SwiperSlide>
                            <div className='auth-image'>
                                <img src='/auth/auth-healthy-foods.jpg' alt='Auth Image' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='auth-image'>
                                <img src='/auth/auth-healthy-foods.jpg' alt='Auth Image' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='auth-image'>
                                <img src='/auth/auth-healthy-foods.jpg' alt='Auth Image' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );

}
