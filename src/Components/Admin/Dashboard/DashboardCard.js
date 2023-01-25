import React from 'react';
import { Col } from 'react-bootstrap';

const DashboardCard = () => {
    return (
        <div className='cusom-card-container'>
            <Col xs={12} sm={12} md={4} lg={4}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>الطلبات</h5>
                                    <p>إجمالي عدد الطلبات</p>
                                    <h4>2400</h4>
                                    <small>55% زيادة</small>
                                </div>
                                <div className='card-icon'>
                                    <i className="fas fa-luggage-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
                <div className='card custom-card custom-card-half'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>العملاء</h5>
                                    <p>إجمالي عدد العملاء</p>
                                    <h4>1000+</h4>
                                    <small>61% زيادة</small>
                                </div>
                                <div className='card-icon'>
                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>الإيرادات</h5>
                                    <p>إجمالي قيمة الإيرادات</p>
                                    <h4>187000 ج.م</h4>
                                    <small>8% نقص</small>
                                </div>
                                <div className='card-icon'>
                                    <i className="fas fa-hand-holding-usd"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardCard;
