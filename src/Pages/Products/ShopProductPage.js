import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Utilities/SearchCountResult';
import SideFilter from '../../Components/Utilities/SideFilter';
import ProductCardContainer from '../..//Components/Product/ProductCardContainer';
import Pagination from '../../Components/Utilities/Pagination';
import UserLayout from '../../Components/Layout/UserLayout';

const ShopProductPage = () => {
    return (
        <UserLayout>
            <div>
                <CategoryHeader />
                <Container>
                    <SearchCountResult title='600 منتج' />
                    <Row className='d-flex flex-row'>
                        <Col xs={2} sm={2} md={1} className='d-flex'>
                            <SideFilter />
                        </Col>
                        <Col xs={10} sm={10} md={11}>
                            <ProductCardContainer title='' btnTitle='' />
                        </Col>
                    </Row>
                    <Pagination />
                </Container>
            </div>
        </UserLayout>
    );
}

export default ShopProductPage;
