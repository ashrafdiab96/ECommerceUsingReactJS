import React from 'react'
import UserLayout from '../../../Components/Layout/UserLayout';
import UserProfile from '../../../Components/User/Profile/UserProfile';

const UserProfilePage = () => {
    return (
        <div>
            <UserLayout>
                <UserProfile />
            </UserLayout>
        </div>
    );
}

export default UserProfilePage;
