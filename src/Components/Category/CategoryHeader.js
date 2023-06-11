import React, { useEffect, useState } from 'react'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userNoImg from '../../assets/images/user.png';
import login from '../../assets/images/login.png';
import AllCategoryPageHook from '../../hook/categories/all-category-page-hook';

const CategoryHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, loading, pageCount, getPage] = AllCategoryPageHook();
    const [user, setUser] = useState('');
    useEffect(() => {
        localStorage.getItem('user') ? setUser(JSON.parse(localStorage.getItem('user'))) : setUser('');
    }, []);

    return (
        <div className='category-header text-center'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={10} sm={10} md={8} className='d-flex justify-content-start flex-wrap py-2'>
                        <div className='cat-text-header'>الكل</div>
                        {
                            loading === false ? (
                                categories.data?.length >= 1 ? (
                                    categories.data.slice(0, 6).map((item) => {
                                        return (
                                            <div
                                                className='cat-text-header'
                                                key={item._id}
                                            >{item.name}</div>)
                                        })
                                ) : null
                            ) : null
                        }
                    </Col>
                    <Col xs={2} sm={2} md={4} className='d-flex justify-content-end align-items-center'>
                        <div>
                            <button
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                                onClick={handleShow}
                            >
                                <i
                                    className='fas fa-bars'
                                    style={{
                                        color: '#FFFFFF',
                                        marginLeft: '30px',
                                        marginTop: '5px',
                                        fontSize: '22px',
                                    }}
                                ></i>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className='category-side-nav'>
                    <Offcanvas.Title className='d-flex align-items-center'>
                        {
                            user !== '' ? (
                                <div>
                                    {
                                        user.profileImg ? (
                                            <img src={user.profileImg} className='cat-user-img' alt='user' />
                                        ) : (
                                            <img src={userNoImg} className='cat-user-img' alt='user' />
                                        )
                                    }
                                    <span className='mx-3'>مرحبا, {user.name}</span>
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
                    </Offcanvas.Title>
                    <div onClick={handleClose} className='category-side-close'>
                        <i className='fa fa-close'></i>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='list-unstyled p-0'>
                        <li>
                            <h5 className='cat-text-title'>الشائع</h5>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>الأكثر مبيعا</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>الأحدث</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>العروض</div>
                            </Link>
                        </li>
                    </ul>
                    <div className='category-side-line'></div>
                    <ul className='list-unstyled p-0'>
                        <li>
                            <h5 className='cat-text-title'>جميع التصنيفات</h5>
                        </li>
                        {
                            loading === false ? (
                                categories.data?.length >= 1 ? (
                                    categories.data.slice(0, 6).map((item) => {
                                        return (
                                            <Link key={item._id} className='text-decoration-none'>
                                                <div className='cat-text-side'>{item.name}</div>
                                            </Link>
                                        )
                                    })
                                ) : null
                            ) : null
                        }
                    </ul>
                    <div className='category-side-line'></div>
                    <ul className='list-unstyled p-0'>
                        <li>
                            <h5 className='cat-text-title'>المساعدة والإعدادات</h5>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>حسابي</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>طلباتي</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>المساعدة</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side d-flex align-items-center'>
                                    <span>تسجيل الخروج</span>
                                    <i className="fas fa-sign-out-alt mx-2"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default CategoryHeader;
