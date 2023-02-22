import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.png';
import user from '../../assets/images/user.png';
import cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import NavbarSearchHook from '../../hook/search/navbar-search-hook';

const NavBarLogin = () => {
    const [searchWord, onSrarchWordChange] = NavbarSearchHook();
    let word = localStorage.getItem('searchWord') ? localStorage.getItem('searchWord') : '';
    
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
                            className="me-2 w-100"
                            aria-label="Search"
                            onChange={onSrarchWordChange}
                            value={word}
                        />
                        <Nav className="me-auto" >
                            <Link
                                to='/user/profile'
                                className='nav-text d-flex mt-3 justify-content-center text-decoration-none'
                            >
                                <img src={user} className='login-img mx-1' alt='user' />
                                <p style={{ color: 'white' }}>أشرف</p>
                            </Link>
                            <Link
                                to='/login'
                                className='nav-text d-flex mt-3 mx-3 justify-content-center text-decoration-none'
                            >
                                <img src={login} className='login-img mx-1' alt='login icon' />
                                <p style={{ color: 'white' }}>دخول</p>
                            </Link>
                            <Link
                                to='/cart'
                                className='nav-text d-flex mt-3 justify-content-center text-decoration-none'
                            >
                                <img src={cart} className='login-img mx-1' alt='cart icon' />
                                <p style={{ color: 'white' }}>العربة</p>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    ); 
}

export default NavBarLogin;
