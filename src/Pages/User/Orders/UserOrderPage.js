import React from 'react';
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserOrder from '../../../Components/User/Orders/UserOrder';

const UserOrderPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <UserOrder />
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserOrderPage;
