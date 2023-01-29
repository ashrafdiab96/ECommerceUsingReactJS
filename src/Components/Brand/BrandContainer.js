import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import BrandCard from './BrandCard';

const BrandContainer = ({ data, loading }) => {
    return (
        <Container>
            <div className='admin-content-text mt-3'>كل الماركات</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        data?.length >= 1 ? (
                            data.map((item) => {
                                return (
                                    <BrandCard
                                        key={item._id}
                                        img={item.image}
                                    />
                                )
                            })
                        ) : <h4 className='alert alert-danger text-center'>لا توجد بيانات</h4>
                    ) : <Spinner animation='border' variant='primary' className='m-auto' />
                }
            </Row>
        </Container>
    );
}

export default BrandContainer;
