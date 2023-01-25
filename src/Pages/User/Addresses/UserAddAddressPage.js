import React from 'react'
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserAddAddress from '../../../Components/User/Addresses/UserAddAddress';

const UserAddAddressPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <UserAddAddress />
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserAddAddressPage;
