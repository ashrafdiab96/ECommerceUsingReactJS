import React from 'react'
import { Container, Row } from 'react-bootstrap';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminProducts from '../../../Components/Admin/Products/AdminProducts';
import Pagination from '../../../Components/Utilities/Pagination';
import GetProductsAdminHook from '../../../hook/admin/get-products-admin-hook';

const AdminProductsPAge = () => {
    const [items, pagination, onPress] = GetProductsAdminHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <AdminLayout>
                <Container>
                    <Row>
                        <div>
                            <h4 className='admin-products-title'>إدارة المنتجات</h4>
                        </div>
                        <AdminProducts products={items} pagination={pagination} />
                        {
                            pagination.numberOfPages > 1 ? (
                                <Pagination
                                    pageCount={pagination.numberOfPages}
                                    onPress={onPress}
                                />
                            ) : null
                        }
                    </Row>
                </Container>
            </AdminLayout>
        </div>
    );
}

export default AdminProductsPAge;
