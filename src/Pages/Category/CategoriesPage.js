import React from 'react';
import CategoryContainer from '../../Components/Category/CategoryContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import Pagination from '../../Components/Utilities/Pagination';
import AllCategoryPageHook from '../../hook/categories/all-category-page-hook';

const CategoriesPage = () => {
    const [categories, loading, pageCount, getPage] = AllCategoryPageHook();

    return (
        <UserLayout>
            <div>
                <CategoryContainer data={categories.data} loading={loading} />
                {
                    pageCount > 1 ? (
                        <Pagination pageCount={pageCount} onPress={getPage} />
                    ) : null
                }
            </div>
        </UserLayout>
    );
}

export default CategoriesPage;
