import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';import { Spinner } from 'react-bootstrap';

const CategoryContainer = ({ data, loading }) => {
    const colors = ['#FFDBE8', '#F4DBA5', '#55CFDF', '#FF6262', '#0034FF', '#FFD3E8'];

    return (
        <Container>
            <div className='admin-content-text mt-3'>كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        data?.length >= 1 ? (
                            data.map((item) => {
                                return (
                                    <CategoryCard
                                        title={item.name}
                                        background={colors[Math.floor(Math.random() * 5) + 1]}
                                        img={item.image}
                                        key={item._id}
                                    />
                                );
                            })
                        ) : <h4>لا توجد بيانات</h4>
                    ) : <Spinner animation='border' variant='primary' className='m-auto' />
                }
            </Row>
        </Container>
    );
}

export default CategoryContainer;
