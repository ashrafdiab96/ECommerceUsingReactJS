import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import HomeCategoryHook from '../../hook/categories/home-category-hook';

const HomeCategory = () => {
    const [categories, loading, colors] = HomeCategoryHook();

    return (
        <Container>
            <SubTitle title='التصنيفات' btnTitle='المزيد' pathText='/categories' />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        categories.data ? (
                            categories.data.slice(0, 5).map((item, index) => {
                                return (
                                    <CategoryCard
                                        title={item.name}
                                        background={colors[index]}
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

export default HomeCategory;
