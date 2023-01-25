import React from 'react'
import { Col, Row } from 'react-bootstrap';

const OrderUserDetails = () => {
    return (
        <div className='d-flex justify-content-center mb-3'>
            <Row className="justify-content-center mt-4 admin-order-user-data w-75">
                <Col xs="12" className=" d-flex justify-content-center">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div className='admin-order-user-title'>
                        الاسم:
                    </div>

                    <div className="admin-order-user-content mx-2">
                        احمد عبداللة
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div className='admin-order-user-title'>
                        رقم الهاتف:
                    </div>

                    <div className="admin-order-user-content mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div className='admin-order-user-title'>
                        البريد الإلكتروني:
                    </div>

                    <div className="admin-order-user-content mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className="d-inline d-flex align-items-center justify-content-center text-center">
                    <span
                        className='py-2 px-5'
                        style={{ backgroundColor: '#FFFFFF' }}
                    >المجموع ٤٠٠٠ جنيه</span>
                </div>
                <div className="d-flex mt-2 justify-content-center align-items-center">
                    <select name="languages" id="lang"
                        className="select input-form-area text-center px-2 w-50 m-0"
                    >
                        <option value="val">حالة الطلب</option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                    <button className="custom-btn mx-3 px-3">حفظ </button>
                </div>
            </Row>
        </div>
    );
}

export default OrderUserDetails;
