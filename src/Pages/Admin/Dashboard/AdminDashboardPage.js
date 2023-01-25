import React from 'react'
import { Container } from 'react-bootstrap';
import AdminDashboard from '../../../Components/Admin/Dashboard/AdminDashboard';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';

const AdminDashboardPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <AdminLayout>
                <Container>
                    <AdminDashboard />
                </Container>
            </AdminLayout>
        </div>
    );
}

export default AdminDashboardPage;
