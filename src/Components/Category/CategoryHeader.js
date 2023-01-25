import React, { useState } from 'react'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.png';

const CategoryHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='category-header text-center'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={10} sm={10} md={8} className='d-flex justify-content-start flex-wrap py-2'>
                        <div className='cat-text-header'>الكل</div>
                        <div className='cat-text-header'>الكترونيات</div>
                        <div className='cat-text-header'>ملابس</div>
                        <div className='cat-text-header'>كهربية</div>
                        <div className='cat-text-header'>تخفيضات</div>
                        <div className='cat-text-header'>تخفيضات</div>
                        <div className='cat-text-header'>تخفيضات</div>
                        <div className='cat-text-header'>تخفيضات</div>
                        <div className='cat-text-header'>تخفيضات</div>
                        <div className='cat-text-header'>المزيد</div>
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
                        <img src={user} className='cat-user-img' alt='user' />
                        <span className='mx-3'>مرحبا, أشرف دياب</span>
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
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>الكترونيات</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>ملابس</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>كهربية</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>لابتوب</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none'>
                                <div className='cat-text-side'>موبايلات</div>
                            </Link>
                        </li>
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
