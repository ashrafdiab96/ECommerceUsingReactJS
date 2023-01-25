import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from '../../Product/ProductCard';
import Pagination from '../../Utilities/Pagination';

const UserWishlist = () => {
    return (
        <div>
            <div>
                <h4 className='my-4'>المنتجات المفضلة</h4>
            </div>
            <Row className='d-flex justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination />
        </div>
    );
}

export default UserWishlist;
