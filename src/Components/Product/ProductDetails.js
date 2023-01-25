import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductDescription from './ProductDescription';
import ProductGallery from './ProductGallery';

const ProductDetails = () => {
    return (
        <div>
            <Row className='py-3'>
                <h3 className='primary-color text-center'>تفاصيل المنتج</h3>
            </Row>
            <Row className='py-3'>
                <Col lg={4}>
                    <ProductGallery />
                </Col>
                <Col lg={8}>
                    <ProductDescription />
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetails;
