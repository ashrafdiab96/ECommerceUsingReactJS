import React from 'react'
import { Col, Row } from 'react-bootstrap';

const UserEditAddress = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="text-center pb-4">تعديل عنوان</h4>
                    <Col sm={12}>
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="النوع (منزل - عمل ...)"
                        />
                    </Col>
                    <Col sm={12}>
                        <select className="admin-add-input d-block mt-3 px-3">
                            <option>الدولة</option>
                            <option>مصر</option>
                        </select>
                    </Col>
                    <Col sm={12}>
                        <select className="admin-add-input d-block mt-3 px-3">
                            <option>المحافظة</option>
                            <option>القاهرة</option>
                            <option>الجيزة</option>
                        </select>
                    </Col>
                    <Col sm={12}>
                        <textarea
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="العنوان بالتفصيل"
                            rows={3}
                            style={{ resize: 'none' }}
                        ></textarea>
                    </Col>
                    <Col sm={12}>
                        <textarea
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="علامة مميزة"
                            rows={3}
                            style={{ resize: 'none' }}
                        ></textarea>
                    </Col>
                    <Col sm={12}>
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="الرقم البريدي"
                        />
                    </Col>
                    <Col sm={12}>
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="رقم الهاتف"
                        />
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end ">
                        <button className="custom-btn d-inline mt-2 ">حفظ التعديلات</button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default UserEditAddress;
