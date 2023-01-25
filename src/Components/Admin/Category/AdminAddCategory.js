import React from 'react';
import { Col, Row } from 'react-bootstrap';
import avatar from '../../../assets/images/avatar.png';

const AdminAddCategory = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="text-center pb-4">اضافه تصنيف جديد</h4>
                    <Col sm={12}>
                        <div className="text-form pb-2">صوره التصنيف</div>
                        <img src={avatar} alt="" height="100px" width="120px" />
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم التصنيف"
                        />
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end ">
                        <button className="custom-btn d-inline mt-2 ">حفظ التعديلات</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AdminAddCategory;