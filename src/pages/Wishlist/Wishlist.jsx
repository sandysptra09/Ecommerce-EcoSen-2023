import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Wishlist.css'

export default function Wishlist() {
    const [wishlist, setWishlist] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchWishlistData(token);
        }
    }, []);

    const fetchWishlistData = async (token) => {
        try {
            const response = await axios.get('http://192.168.1.101:9000/wishlist', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setWishlist(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Failed to fetch My Wishlist', error);
        }
    };

    const handleDeleteWishlist = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            const confirmDelete = window.confirm('Are you sure you want to remove this item from your wishlist?');

            if (confirmDelete) {
                const responseDeleteWishlist = await axios.delete(`http://192.168.1.101:9000/wishlist/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Tambahkan log atau pembaruan lainnya setelah berhasil menghapus wishlist
                console.log('Item removed from wishlist:', responseDeleteWishlist.data);

                // Setelah menghapus, ambil ulang data wishlist
                fetchWishlistData(token);
            }
        } catch (error) {
            console.log('Failed to delete wishlist item!', error);
        }
    };


    return (
        <div>
            <Header />
            <div className="intro-banner-wishlist">
                <img src="" alt="" />
                <div className="title-banner-wishlist">
                    <h2 className="title-banner">My wishlist</h2>
                    <div className="breadcrumb">
                        <span className="nav-wishlist">
                            Home
                        </span>
                        <span className="nav-wishlist">
                            /
                        </span>
                        <h6 className="breadcrumb-wishlist">
                            My Wishlist
                        </h6>
                    </div>
                </div>
            </div>
            <div className='container-my-wishlist'>
                <div className='my-wishlist'>
                    <div className="title-my-wishlist">
                        <h2 className="titles">My Wishlist</h2>

                    </div>
                    <div className="container-table-cart">
                        <table className="table-my-wishlist">
                            <thead className="head-table">
                                <tr className="head-title">
                                    <th className="title-table">Product Name</th>
                                    <th className="title-table">Price</th>
                                    <th className="title-table">Product Excerpt</th>
                                    <th className="title-table">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist &&
                                    wishlist.data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="info-product">
                                                <img className="wishlist-product-img" src={item.product_image} alt={item.productName} />
                                                <h5 className="name-product-wishlist">{item.product_name}</h5>
                                            </td>
                                            <td className="product-info">${item.product_price}</td>
                                            <td className="product-excerpt">
                                                <h5 className="excerpt">{item.product_detail}</h5>
                                            </td>
                                            <td className="product-action">
                                                <img onClick={() => handleDeleteWishlist(item.id)} src="/assets/elements/trash.png" alt="Delete" />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}