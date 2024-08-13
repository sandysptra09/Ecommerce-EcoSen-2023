import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import './Register.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const naviagte = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://192.168.1.101:9000/auth/registrations', {
                name, email, phone, password, confirmPassword
            });

            Swal.fire({
                icon: 'success',
                title: '<span class="swal-title">Registration Successful</span>',
                text: 'Welcome to EcoSen! You can now login with your credentials.',
            });

            console.log(response.data);
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');

            naviagte('/login')

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: '<span class="swal-title">Registration Failed</span>',
                text: 'Failed to register. Please check your information and try again.',
            });
        }
    };

    return (
        <div className='container'>
            <div className='container-register'>
                <div className='box-1'>
                    <a href='/' className='icon-auth'>
                        <img src='/ecosen-logo.png' alt='' />
                    </a>

                    <div className='register'>
                        <div className='auth-title'>
                            <h1>Daftar</h1>
                            <p>Daftarkan diri Anda di sini</p>
                        </div>

                        <div className='auth-input'>
                            <div className='label-input'>
                                <div className='input-name'>
                                    <label>Nama</label>
                                    <input
                                        placeholder='Tulis nama Anda'
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className='input-email'>
                                    <label>Email</label>
                                    <input
                                        placeholder='Tulis email Anda'
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='input-phone'>
                                    <label>No. Handphone</label>
                                    <input
                                        placeholder='Tulis nomor handphone Anda'
                                        type='number'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                </div>

                                <div className='input-password'>
                                    <label>Konfirmasi Password</label>
                                    <input
                                        placeholder='Tulis ulang kata sandi Anda'
                                        type='password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <Link to='/login' className='to-login'>Kembali ke login</Link>
                                    
                                </div>

                                <button className='btn-register' onClick={handleSignup}>
                                    Daftar
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
                                <img src='/auth/auth-healthy-foods.jpg' alt='Gambar Auth' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='auth-image'>
                                <img src='/auth/auth-healthy-foods.jpg' alt='Gambar Auth' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='auth-image'>
                                <img src='/auth/auth-healthy-foods.jpg' alt='Gambar Auth' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );

}