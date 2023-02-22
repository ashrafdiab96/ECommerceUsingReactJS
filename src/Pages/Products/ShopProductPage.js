import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Utilities/SearchCountResult';
import SideFilter from '../../Components/Utilities/SideFilter';
import ProductCardContainer from '../../Components/Product/ProductCardContainer';
import Pagination from '../../Components/Utilities/Pagination';
import UserLayout from '../../Components/Layout/UserLayout';
import GetSearchProductsHook from '../../hook/products/get-search-products-hook';

const ShopProductPage = () => {
    const [items, pagination, onPress, getProducts, results] = GetSearchProductsHook();

    return (
        <UserLayout>
            <div>
                <CategoryHeader />
                <Container fluid>
                    <SearchCountResult onClick={getProducts} title={`يوجد ${results} منتج`} />
                    <Row className='d-flex flex-row p-2'>
                        <Col xs={2} sm={2} md={2} className='d-flex mt-3 products-side-search'>
                            <SideFilter />
                        </Col>
                        <Col xs={10} sm={10} md={10}>
                            <ProductCardContainer products={items} title='' btnTitle='' />
                        </Col>
                    </Row>
                    {
                        pagination.numberOfPages > 1 ? (
                            <Pagination
                                pageCount={pagination.numberOfPages}
                                onPress={onPress}
                            />
                        ) : null
                    }
                </Container>
            </div>
        </UserLayout>
    );
}

export default ShopProductPage;
