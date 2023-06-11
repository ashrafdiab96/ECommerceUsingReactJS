import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.png';
import userNoImg from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
import NavbarSearchHook from '../../hook/search/navbar-search-hook';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getLoggedUser } from '../../redux/actions/authAction';

const NavBarLogin = () => {
    // const dispatch = useDispatch();
    const [searchWord, onSrarchWordChange] = NavbarSearchHook();
    let word = localStorage.getItem('searchWord') ? localStorage.getItem('searchWord') : '';
    const [user, setUser] = useState('');
    useEffect(() => {
        localStorage.getItem('user') ? setUser(JSON.parse(localStorage.getItem('user'))) : setUser('');
        // dispatch(getLoggedUser());
    }, []);
    // const res = useSelector(state => state.authReducer.currentUser);

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser('');
    };

    return (
        <div>
            <Navbar className='sticky-top' bg="dark" variant='dark' expand="sm">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img src={logo} className='logo' alt='logo' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form.Control
                            type="search"
                            placeholder="ابحث"
                            className="me-2"
                            style={{ width: '55%' }}
                            aria-label="Search"
                            onChange={onSrarchWordChange}
                            value={word}
                        />
                        <Nav className="m-auto" >
                            {
                                user !== '' ? (
                                    <div className='d-flex d-flex align-items-center justify-content-center'>
                                        <Link
                                            to='/user/profile'
                                            className='nav-text d-flex align-items-center justify-content-center text-decoration-none'
                                        >
                                            {
                                                user.profileImg ? (
                                                    <img src={user.profileImg} className='login-img mx-1' alt='user' />
                                                ) : (
                                                    <img src={userNoImg} className='login-img mx-1' alt='user' />
                                                )
                                            }
                                            <p className='m-0' style={{ color: 'white' }}>{user.name}</p>
                                        </Link>
                                        <Link
                                            to='/cart'
                                            className='nav-text mx-3 d-flex align-items-center justify-content-center text-decoration-none'
                                        >
                                            <i class="fas fa-cart-plus" style={{ fontSize: '18px' }}></i>
                                            <p className='m-1' style={{ color: 'white' }}>العربة</p>
                                        </Link>
                                        <span
                                            style={{ cursor: 'pointer' }}
                                            className='nav-text d-flex align-items-center justify-content-center text-decoration-none'
                                            onClick={logout}
                                        >
                                            <i class="fas fa-power-off" style={{ fontSize: '18px' }}></i>
                                            <p className='m-1' style={{ color: 'white' }}>تسجيل الخروج</p>
                                        </span>
                                        <Link
                                            to='/admin/dashboard'
                                            className='nav-text mx-3 d-flex align-items-center justify-content-center text-decoration-none'
                                        >
                                            <i class="fas fa-user-shield" style={{ fontSize: '18px' }}></i>
                                            <p className='m-1' style={{ color: 'white' }}>لوحة التحكم للأدمن</p>
                                        </Link>
                                    </div>
                                ) : (
                                    <Link
                                        to='/login'
                                        className='nav-text d-flex mx-3 align-items-center justify-content-center text-decoration-none'
                                    >
                                        <img src={login} className='login-img mx-1' alt='login icon' />
                                        <p className='m-0' style={{ color: 'white' }}>دخول</p>
                                    </Link>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    ); 
}

export default NavBarLogin;
