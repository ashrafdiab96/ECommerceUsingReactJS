import React from 'react'
import { Container } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Product/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import ProductCardContainer from '../../Components/Product/ProductCardContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import ProductSpecifications from '../../Components/Product/ProductSpecifications';

const ProductDetailsPage = () => {
    return (
        <UserLayout>
            <div>
                <CategoryHeader />
                <Container>
                    <div className='product-details'>
                        <ProductDetails />
                        <ProductSpecifications />
                        <RateContainer />
                    </div>
                    <ProductCardContainer title='منتجات قد تعجبك' />
                </Container>
            </div>
        </UserLayout>
    );
}

export default ProductDetailsPage;
