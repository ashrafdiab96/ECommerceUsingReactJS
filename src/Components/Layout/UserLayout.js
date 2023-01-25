import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Utilities/Footer';
import NavBarLogin from '../Utilities/NavBarLogin';

const UserLayout = ({ children }) => {
    return (
        <Container fluid style={{ minHeight: '670px' }}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='p-0'>
                    <NavBarLogin />
                    {children}
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default UserLayout;
