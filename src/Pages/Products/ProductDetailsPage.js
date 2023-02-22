import React from 'react'
import { Container } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Product/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import ProductCardContainer from '../../Components/Product/ProductCardContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import ProductSpecifications from '../../Components/Product/ProductSpecifications';
import GetHomeProductsHook from '../../hook/products/get-home-products-hook';
import GetProductDetailsHook from '../../hook/products/get-product-details-hook';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [items] = GetHomeProductsHook();
    const [item, similarProds] = GetProductDetailsHook(id);
    
    return (
        <UserLayout>
            <div>
                <CategoryHeader />
                <Container>
                    <div className='product-details'>
                        <ProductDetails />
                        {/* <ProductSpecifications /> */}
                        <RateContainer />
                    </div>
                    <ProductCardContainer products={similarProds} title='منتجات مشابهة' />
                    <ProductCardContainer products={items} title='منتجات قد تعجبك' />
                </Container>
            </div>
        </UserLayout>
    );
}

export default ProductDetailsPage;
