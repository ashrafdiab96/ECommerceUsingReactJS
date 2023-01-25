import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartCheckout from '../../Components/Cart/CartCheckout';
import CartItem from '../../Components/Cart/CartItem';
import UserLayout from '../../Components/Layout/UserLayout';

const CartPage = () => {
    return (
        <UserLayout>
            <Container>
                <Row>
                    <div className='cart-title mt-4'>عربة التسوق</div>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={9}>
                        <CartItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <CartCheckout />
                    </Col>
                </Row>
            </Container>
        </UserLayout>
    );
}

export default CartPage;
