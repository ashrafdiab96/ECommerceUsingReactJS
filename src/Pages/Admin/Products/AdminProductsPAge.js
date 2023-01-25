import React from 'react'
import { Container, Row } from 'react-bootstrap';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminProducts from '../../../Components/Admin/Products/AdminProducts';
import Pagination from '../../../Components/Utilities/Pagination';

const AdminProductsPAge = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <AdminLayout>
                <Container>
                    <Row>
                        <div>
                            <h4 className='admin-products-title'>إدارة المنتجات</h4>
                        </div>
                        <AdminProducts />
                        <Pagination />
                    </Row>
                </Container>
            </AdminLayout>
        </div>
    );
}

export default AdminProductsPAge;
