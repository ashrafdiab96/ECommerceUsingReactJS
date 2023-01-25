import React from 'react';
import { Row } from 'react-bootstrap';
import AdminProductsCard from './AdminProductsCard';

const AdminProducts = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <Row>
                <AdminProductsCard />
                <AdminProductsCard />
                <AdminProductsCard />
                <AdminProductsCard />
                <AdminProductsCard />
                <AdminProductsCard />
            </Row>
        </div>
    );
}

export default AdminProducts;
