import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import Pagination from '../../Components/Utilities/Pagination';

const CategoriesPage = () => {
    return (
        <UserLayout>
            <div>
                <CategoryContainer />
                <Pagination />
            </div>
        </UserLayout>
    );
}

export default CategoriesPage;
