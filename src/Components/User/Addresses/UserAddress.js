import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';

const UserAddress = () => {
    return (
        <div>
            <Row className='my-4'>
                <h4>قائمة العناوين</h4>
            </Row>
            <Row>
                <UserAddressCard />
                <UserAddressCard />
                <UserAddressCard />
            </Row>
            <Row className='my-3'>
                <Col xs ={12}>
                    <Link to='/user/addresses/add'>
                        <button className='custom-btn'>أضف عنوان</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default UserAddress;
