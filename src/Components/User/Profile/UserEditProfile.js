import React from 'react';
import { Col, Row } from 'react-bootstrap';

const UserEditProfile = () => {
    return (
        <div>
            <div>
                <h4 className='my-4'>تعديل حسابي</h4>
                <div className='admin-add-brand'>
                    <Row className="justify-content-start ">
                        <h4 className="text-center pb-4">تعديل البيانات الرئيسية</h4>
                        <Col sm={6}>
                            <input
                                type="text"
                                className="admin-add-input d-block mt-3 px-3"
                                placeholder="الاسم"
                            />
                        </Col>
                        <Col sm={6}>
                            <input
                                type="text"
                                className="admin-add-input d-block mt-3 px-3"
                                placeholder="رقم الهاتف"
                            />
                        </Col>
                        <Col sm={12}>
                            <input
                                type="email"
                                className="admin-add-input d-block mt-3 px-3"
                                placeholder="البريد الإلكتروني"
                            />
                        </Col>
                        <Col sm={12} className="d-flex justify-content-end ">
                            <button className="custom-btn d-inline mt-2 ">حفظ التعديلات</button>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <div className='admin-add-brand'>
                    <Row className="justify-content-start ">
                        <h4 className="text-center pb-4">تعديل الرقم السري</h4>
                        <Col sm={6}>
                            <input
                                type="text"
                                className="admin-add-input d-block mt-3 px-3"
                                placeholder="الرقم السري"
                            />
                        </Col>
                        <Col sm={6}>
                            <input
                                type="text"
                                className="admin-add-input d-block mt-3 px-3"
                                placeholder="تأكيد الرقم السري"
                            />
                        </Col>
                        <Col sm={12} className="d-flex justify-content-end ">
                            <button className="custom-btn d-inline mt-2 ">حفظ التعديلات</button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default UserEditProfile;
