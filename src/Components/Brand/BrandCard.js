import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BrandCard = ({ img }) => {
    return (
        <Col xs={6} sm={6} md={4} lg={3} className=' my-2 d-flex justify-content-center'>
            <Card
                className='my-2'
                style={{
                    width: '100%',
                    height: '151px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#FFFFFF',
                }}
            >
                <Card.Img style={{ height: '151px', width: '100%' }} src={img} />
            </Card>
        </Col>
    );
}

export default BrandCard;
