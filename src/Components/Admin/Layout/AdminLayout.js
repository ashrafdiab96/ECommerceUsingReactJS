import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AdminFooter from './AdminFooter';
import AdminNavBar from './AdminNavBar';
import AdminSideBar from './AdminSideBar';

const AdminLayout = ({ children }) => {
    return (
        <Container fluid className='admin-layout'>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2} className='p-0'>
                    <AdminSideBar />
                </Col>
                <Col xs={12} sm={12} md={10} lg={10} className='p-0'>
                    <AdminNavBar />
                    {children}
                    <AdminFooter />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminLayout;
