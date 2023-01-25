import React from 'react';
import AdminAddBrand from '../../../Components/Admin/Brands/AdminAddBrand';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';

const AdminAddBrandPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <AdminLayout>
                <AdminAddBrand />
            </AdminLayout>
        </div>
    );
}

export default AdminAddBrandPage