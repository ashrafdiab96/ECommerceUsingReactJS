import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const AdminFooter = () => {
    return (
        <div>
            <div className='admin-footer'>
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

export default AdminFooter;
