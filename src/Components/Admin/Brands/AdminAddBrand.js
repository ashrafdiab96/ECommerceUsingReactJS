import React from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../../../assets/images/avatar.png';

const AdminAddBrand = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start">
                    <h4 className="text-center pb-4">اضف ماركه جديده</h4>
                    <Col sm={12}>
                        <div className="text-form pb-2">صوره الماركه</div>
                        <img src={avatar} alt="" height="100px" width="120px" />
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم الماركه"
                        />
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end ">
                        <button className="custom-btn mt-2 ">حفظ التعديلات</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AdminAddBrand;