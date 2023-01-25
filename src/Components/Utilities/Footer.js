import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div
                className='back-top-background footer'
                onClick={scrollTop}
                style={{ cursor: 'pointer' }}
            >
                <Container className='p-3'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} className='d-flex justify-content-center align-items-center'>
                            <div className='text-white'>
                                <span>العودة لأعلى</span>
                                <i className='fa fa-arrow-up'></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='top-footer-background footer p-0'>
                <Container className='p-5'>
                    <Row className='d-flex justify-content-center align-items-start'>
                        <Col
                            xs={12} sm={6} md={4} lg={4}
                            className='d-flex flex-column justify-content-start align-items-center'
                        >
                            <ul className='list-unstyled p-0 m-0'>
                                <li>
                                    <h5 className='text-white'>تعرف علينا</h5>
                                </li>
                                <li>
                                    <Link to='/aboutUs' className='footer-link'>من نحن</Link>
                                </li>
                                <li>
                                    <Link to='/careers' className='footer-link'>الوظائف</Link>
                                </li>
                                <li>
                                    <Link to='/branches' className='footer-link'>فروعنا</Link>
                                </li>
                                <li>
                                    <Link to='/conditions' className='footer-link'>الشروط والأحكام</Link>
                                </li>
                                <li>
                                    <Link to='/privacy' className='footer-link'>سياسة الخصوصية</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col
                            xs={12} sm={6} md={4} lg={4}
                            className='d-flex flex-column justify-content-start align-items-center'
                        >
                            <ul className='list-unstyled p-0 m-0'>
                                <li>
                                    <h5 className='text-white'>تسوق معنا</h5>
                                </li>
                                <li>
                                    <Link to='/yourAccount' className='footer-link'>حسابك</Link>
                                </li>
                                <li>
                                    <Link to='/yourOrders' className='footer-link'>طلباتك</Link>
                                </li>
                                <li>
                                    <Link to='/yourAddresses' className='footer-link'>عناوينك</Link>
                                </li>
                                <li>
                                    <Link to='/yourFavourites' className='footer-link'>قائممة المفضلات</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col
                            xs={12} sm={6} md={4} lg={4}
                            className='d-flex flex-column justify-content-start align-items-center'
                        >
                            <ul className='list-unstyled p-0 m-0'>
                                <li>
                                    <h5 className='text-white'>يسعدنا مساعدتك</h5>
                                </li>
                                <li>
                                    <Link to='/help' className='footer-link'>المساعدة</Link>
                                </li>
                                <li>
                                    <Link to='/shippingAndDeliver' className='footer-link'>الشحن والتوصيل</Link>
                                </li>
                                <li>
                                    <Link to='/returnAndReplace' className='footer-link'>الإسترجاع والإستبدال</Link>
                                </li>
                                <li>
                                    <Link to='/contactUs' className='footer-link'>اتصل بنا</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className='footer-line'></div>
                <Container className='p-3'>
                    <Row>
                        <Col sm={4} className='d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className='fa fa-phone footer-phone'></i>
                                <span className='footer-phone'>01020869595</span>
                            </div>
                        </Col>
                        <Col sm={4} className='d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className='fa fa-envelope footer-phone'></i>
                                <span className='footer-phone'>ashraf.diab22.ad@gmail.com</span>
                            </div>
                        </Col>
                        <Col sm={4} className='d-flex justify-content-center align-items-center'>
                            <div style={{ cursor: 'pointer' }}>
                                <img className='social-img' src={facebook} alt='facebook icon' />
                            </div>
                            <div style={{ cursor: 'pointer' }}>
                                <img className='social-img' src={instagram} alt='instagram icon' />
                            </div>
                            <div style={{ cursor: 'pointer' }}>
                                <img className='social-img' src={twitter} alt='twitter icon' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-background footer'>
                <Container className='p-4'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={6} className='d-flex justify-content-center align-items-center'>
                            <div className='footer-shroot'>
                                <span>خزينك للتجارة الإلكترونية</span>
                                <span>
                                    &nbsp; &copy; {new Date().getFullYear()} &copy; &nbsp;
                                </span>
                                <span>جميع الحقوق محفوظة</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
