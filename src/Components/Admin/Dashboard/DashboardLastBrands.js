import React from 'react'
import { Col } from 'react-bootstrap';
import brand from '../../../assets/images/brand1.png';

const DashboardLastBrands = () => {
    return (
        <div className='cusom-card-container my-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <h5>أحدث الماركات</h5>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={brand} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أبل</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={brand} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>سامسونج</strong></p>
                                            <p><small>15 نوفمبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={brand} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>زارا</strong></p>
                                            <p><small>15 مارس - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={brand} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>إل جي</strong></p>
                                            <p><small>15 ديسمبر - 4:21 م</small></p>
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

export default DashboardLastBrands;
