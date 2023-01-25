import React from 'react';
import BrandContainer from '../../Components/Brand/BrandContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import Pagination from '../../Components/Utilities/Pagination';

const BrandsPage = () => {
    return (
        <UserLayout>
            <div>
                <BrandContainer />
                <Pagination />
            </div>
        </UserLayout>
    );
}

export default BrandsPage;
