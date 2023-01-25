import React from 'react'
import { Container } from 'react-bootstrap';
import UserLayout from '../../../Components/Layout/UserLayout';
import UserEditProfile from '../../../Components/User/Profile/UserEditProfile';

const UserEditProfilePage = () => {
  return (
    <div>
        <UserLayout>
            <Container>
                <UserEditProfile />
            </Container>
        </UserLayout>
    </div>
  )
}

export default UserEditProfilePage;
