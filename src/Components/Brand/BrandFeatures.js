import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import BrandCard from './BrandCard';
import BrandsFeatureHook from '../../hook/brands/brands-feature-hook';

const BrandFeatures = ({ title, btnTitle }) => {
    const [brands, loading] = BrandsFeatureHook();

    return (
        <Container>
            <SubTitle title={title} btnTitle={btnTitle} pathText='/brands' />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        brands.data?.length >= 1 ? (
                            brands.data.slice(0,8).map((item) => {
                                return (
                                    <BrandCard
                                        img={item.image}
                                        key={item._id}
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

export default BrandFeatures;
