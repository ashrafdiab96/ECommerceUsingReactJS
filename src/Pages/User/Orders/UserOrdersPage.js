import React from 'react'
import { Container, Row } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserOrders from '../../../Components/User/Orders/UserOrders';

const UserOrdersPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <Row>
                        <UserOrders />
                    </Row>
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserOrdersPage;
