import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import UserProfileCard from './UserProfileCard';
import UserProfileOrder from './UserProfileOrder';

const UserProfile = () => {
    return (
        <div>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12}>
                        <h3 className='my-3 primary-color'>الصفحة الشخصية</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <UserProfileCard />
                    </Col>
                    <Col xs={12} md={9}>
                        <UserProfileOrder />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserProfile;
