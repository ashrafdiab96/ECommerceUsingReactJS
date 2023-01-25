import React from 'react'
import { Container, Row } from 'react-bootstrap';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminOrders from '../../../Components/Admin/Orders/AdminOrders';
import Pagination from '../../../Components/Utilities/Pagination';

const AdminOrdersPage = () => {
    return (
        <div>
            <AdminLayout>
                <Container>
                    <Row>
                        <div>
                            <h4 className='admin-products-title'>إدارة الطلبات</h4>
                        </div>
                        <AdminOrders />
                        <Pagination />
                    </Row>
                </Container>
            </AdminLayout>
        </div>
    );
}

export default AdminOrdersPage;
