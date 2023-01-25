import React from 'react';
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserWishlist from '../../../Components/User/WishLists/UserWishlist';

const UserWishlistPage = () => {
    return (
        <div>
            <UserLayout>
                <Container>
                    <UserWishlist />
                </Container>
            </UserLayout>
        </div>
    );
}

export default UserWishlistPage;
