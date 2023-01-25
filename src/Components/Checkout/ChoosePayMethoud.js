import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ChoosePayMethoud = () => {
    
    return (
        <div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between">
                    <div className="admin-content-text text-center mt-3">اختر طريقة الدفع</div>
                    <Col xs="12" className="my-4 d-flex justify-content-center">
                        <label htmlFor="group1">
                            <div className='payment-radio-btn'>
                                <input
                                    name="group"
                                    id="group1"
                                    type="radio"
                                    value="الدفع بالبطاقه الائتمانية"
                                />
                                <i>الدفع بالبطاقه الائتمانية</i>
                            </div>
                        </label>
                        <label htmlFor="group2">
                            <div className='payment-radio-btn'>
                                <input
                                    name="group"
                                    id="group2"
                                    type="radio"
                                    value="الدفع كاش عند الاستلام"
                                />
                                <i>الدفع كاش عند الاستلام</i>
                            </div>
                        </label>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="12" className="d-flex justify-content-center mb-3">
                        <div className="checkout-price pt-2 d-inline border">34000 جنية</div>
                        <div className="checkout-btn px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ChoosePayMethoud