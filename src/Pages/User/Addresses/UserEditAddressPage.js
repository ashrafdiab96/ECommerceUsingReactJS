import React from 'react'
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserEditAddress from '../../../Components/User/Addresses/UserEditAddress';

const UserEditAddressPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <UserEditAddress />
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserEditAddressPage;
