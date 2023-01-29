import React from 'react'
import { Col } from 'react-bootstrap';
import user from '../../../assets/images/user.png';

const DashboardOrders = () => {
    return (
        <div>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <h5>الطلبات</h5>
                                <p>أحدث الطلبات المطلوبة مؤخرا</p>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={user} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أحمد حسن</strong></p>
                                            <p><small>#2145</small></p>
                                        </div>
                                        <div className='d-flex flex-column align-items-end'>
                                            <p><strong>1400ج.م</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={user} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أحمد حسن</strong></p>
                                            <p><small>#2145</small></p>
                                        </div>
                                        <div className='d-flex flex-column align-items-end'>
                                            <p><strong>1400ج.م</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={user} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أحمد حسن</strong></p>
                                            <p><small>#2145</small></p>
                                        </div>
                                        <div className='d-flex flex-column align-items-end'>
                                            <p><strong>1400ج.م</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={user} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أحمد حسن</strong></p>
                                            <p><small>#2145</small></p>
                                        </div>
                                        <div className='d-flex flex-column align-items-end'>
                                            <p><strong>1400ج.م</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardOrders;
