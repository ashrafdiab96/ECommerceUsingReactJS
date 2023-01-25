import React from 'react';
import { Container, Row} from 'react-bootstrap';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';
import AdminOrderDetails from '../../../Components/Admin/Orders/AdminOrderDetails';

const AdminOrderDetailsPage = () => {
    return (
        <div>
            <AdminLayout>
                <Container>
                    <Row>
                        <div>
                            <h4 className='admin-products-title'>تفاصيل الطلب رقم#55</h4>
                        </div>
                        <AdminOrderDetails />
                    </Row>
                </Container>
            </AdminLayout>
        </div>
    );
}

export default AdminOrderDetailsPage;