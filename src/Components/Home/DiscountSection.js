import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import laptops from '../../assets/images/laptops.png';

const DiscountSection = () => {
    return (
        <Container>
            <Row className='discount-backcolor my-3 mx-2 d-flex text-center align-items-center'>
                <Col sm={6}>
                    <div className='discount-title'>
                        خصم يصل إلى ٣٠% على أجهزة اللاب توب
                    </div>
                </Col>
                <Col sm={5}>
                    <img className='dicount-img' src={laptops} alt='discount product' />
                </Col>
            </Row>
        </Container>
    );
}

export default DiscountSection;
