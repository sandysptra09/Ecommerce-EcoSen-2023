import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

export default function Header() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debouncedSearch = _debounce(async (search) => {
        try {
            const response = await axios.get(`http://192.168.1.101:9000/search?search=${search}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }, 1000);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        debouncedSearch(value);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        console.log('Successfully logged out, Take care and come back soon!');
        navigate('/login');
    };

    return (
        <nav className="header">
            <div className="upper-bar">
                <div className="upper-bar-1">
                    <div className='search'>
                        <div className='input'>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={handleChange}
                                value={searchTerm}
                            />
                            <div className='icon-search'>
                                <img src='/assets/elements/search.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <a href="/" >
                        <img src="/ecosen-logo.png" alt="EcoSen" />
                    </a>
                </div>

                <div className="upper-bar-2">
                    {token && (
                        <div className='upper-bar-2'>
                            <a href='/' >
                                <img src='/assets/elements/user.png' alt='' />
                            </a>

                            <Link href='/' >
                                <img src='/assets/elements/share.png' alt='' />
                            </Link>

                            <Link to='/my-wishlist' >
                                <img src='/assets/elements/wishlist.png' alt='' />
                            </Link>

                            <div className='my-cart'>
                                <Link to='/my-cart' >
                                    <img className='icon-cart' src='/assets/elements/cart.png' alt='' />
                                </Link>
                                <div className='counter'>
                                    <h6 className='total-count'>10</h6>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='user-auth'>
                        {token ? (
                            <button className='btn-auth-logout' onClick={handleLogout}>
                                <h5 className='auth-logout-title'>Logout</h5>
                            </button>
                        ) : (
                            <button className='btn-user-login'>
                                <Link to='/login' className='auth-login-title'>Login</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                <img src={result.product_image} alt={result.product_name} />
                                <p>{result.product_name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>

            <div className="navigation-bar">
                <div className='left-side'>
                    <div className='all-categories'>
                        <Link to='/' className='home'>Home</Link>
                    </div>
                    <div className='nav-shop'>
                        <h5 className='title-shop'>Shop</h5>
                        <img className='dropdown' src='/assets/elements/dropdown.png' alt='' />
                    </div>
                    <div className='nav-product'>
                        <h5 className='title-product'>Product</h5>
                        <img className='dropdown' src='/assets/elements/dropdown.png' alt='' />
                    </div>
                    <div className='nav-pages'>
                        <h5 className='title-pages'>Pages</h5>
                        <img className='dropdown' src='/assets/elements/dropdown.png' alt='' />
                    </div>
                    <div className='nav-blog'>
                        <h5 className='title-blog'>Blog</h5>
                        <img className='dropdown' src='/assets/elements/dropdown.png' alt='' />
                    </div>
                    <h5 className='title-faqs'>FAQs</h5>
                </div>

                <div className='store-information'>
                    <div className='address'>
                        <img className='icon-information' src='/assets/elements/address.png' alt='' />
                        <div className='text-information'>
                            <h6 className='info'>Store location</h6>
                            <h6 className='info-address'>600 N Washington Ave Suite C203</h6>
                        </div>
                    </div>

                    <div className='contact'>
                        <img className='icon-information' src='/assets/elements/contact.png' alt='' />
                        <div className='text-information'>
                            <h6 className='info'>Call us for free</h6>
                            <h6 className='info-contact'>+008 0642 118</h6>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
