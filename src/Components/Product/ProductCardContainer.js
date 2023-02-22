import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import ProductCard from './ProductCard';

const ProductCardContainer = ({ title, btnTitle, pathText, products }) => {
    return (
        <Container>
            <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    products.length >= 1 ? (
                        products.map((product) => {
                           return <ProductCard key={product._id} product={product} />
                        })
                    ) : null
                }
            </Row>
        </Container>
    );
}

export default ProductCardContainer;
