import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartCheckout = () => {
    return (
        <div className='my-2'>
            <Row>
                <Col xs={12} className='checkout-div'>
                    <h6>لديك كوبون؟</h6>
                    <div className='d-flex justify-content-between align-items-center'>
                        <input
                            className="copon-input d-inline p-2"
                            placeholder="كود الخصم"
                        />
                        <button className="copon-btn d-inline ">تطبيق</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='checkout-div mt-3'>
                    <h6>تفاصيل الشراء</h6>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>العدد</p>
                        <p>6</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>السعر</p>
                        <p>51000.00 ج.م</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>الخصم</p>
                        <p>5100.00 ج.م</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>الضريبة</p>
                        <p>6426.00 ج.م</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>التوصيل</p>
                        <p>30.00 ج.م</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-between align-items-center'>
                        <p>الإجمالي</p>
                        <p>58752.00 ج.م</p>
                    </div>
                    <Link
                        to="/order/paymethoud"
                        style={{ textDecoration: "none" }}
                    >
                        <button className="copon-btn w-100 px-2"> اتمام الشراء</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default CartCheckout