import React from 'react';
import BrandContainer from '../../Components/Brand/BrandContainer';
import UserLayout from '../../Components/Layout/UserLayout';
import Pagination from '../../Components/Utilities/Pagination';
import AllBrandsPageHook from '../../hook/brands/all-brands-page-hook';

const BrandsPage = () => {
    const [brands, loading, pageCount, getPage] = AllBrandsPageHook();

    return (
        <UserLayout>
            <div>
                <BrandContainer data={brands.data} loading={loading} />
                {
                    pageCount > 1 ? (
                        <Pagination pageCount={pageCount} onPress={getPage} />
                    ) : null
                }
            </div>
        </UserLayout>
    );
}

export default BrandsPage;
