import React from 'react';
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserAddress from '../../../Components/User/Addresses/UserAddress';

const UserAddressPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <UserAddress />
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserAddressPage;
