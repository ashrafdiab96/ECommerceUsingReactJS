import React from 'react';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminEditProduct from '../../../Components/Admin/Products/AdminEditProduct';

const AdminEditProductPage = () => {
    return (
        <div>
            <AdminLayout>
                <AdminEditProduct />
            </AdminLayout>
        </div>
    );
}

export default AdminEditProductPage;
