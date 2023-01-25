import React from 'react';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminAddCategory from '../../../Components/Admin/Category/AdminAddCategory';

const AdminAddCategoryPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <AdminLayout>
                <AdminAddCategory />
            </AdminLayout>
        </div>
    )
}

export default AdminAddCategoryPage;