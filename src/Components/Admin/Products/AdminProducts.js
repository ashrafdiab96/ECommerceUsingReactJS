import React from 'react';
import { Row } from 'react-bootstrap';
import AdminProductsCard from './AdminProductsCard';

const AdminProducts = ({ products, pagination }) => {
    return (
        <div style={{ minHeight: '670px' }}>
            <Row>
                {products ? (
                    products.map(product => {
                        return (
                            <AdminProductsCard
                                key={product._id}
                                product={product}
                                pagination={pagination}
                            />
                        )
                    })
                ) : <h4>لا يوجد بيانات</h4>}
            </Row>
        </div>
    );
}

export default AdminProducts;
