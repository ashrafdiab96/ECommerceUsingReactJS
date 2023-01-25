import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminAddSubCategory from '../../../Components/Admin/SubCategory/AdminAddSubCategory';
import AdminLayout from '../../../Components/Admin/Layout/AdminLayout';

const AdminAddSubCategoryPage = () => {
    return (
        <div>
        <AdminLayout>
            <Container>
                <Row>
                    <AdminAddSubCategory />
                </Row>
            </Container>
        </AdminLayout>
    </div>
    )
}

export default AdminAddSubCategoryPage