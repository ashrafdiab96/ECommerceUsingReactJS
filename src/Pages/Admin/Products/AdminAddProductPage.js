import React from 'react';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminAddProduct from '../../../Components/Admin/Products/AdminAddProduct';

const AdminAddProductPage = () => {
    return (
        <div>
            <AdminLayout>
                <AdminAddProduct />
            </AdminLayout>
        </div>
    );
}

export default AdminAddProductPage;
