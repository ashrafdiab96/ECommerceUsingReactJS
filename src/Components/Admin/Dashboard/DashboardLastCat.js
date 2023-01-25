import React from 'react'
import { Col } from 'react-bootstrap';
import cat from '../../../assets/images/cat2.png';

const DashboardLastCat = () => {
    return (
        <div className='cusom-card-container mt-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <h5>أحدث التصنيفات</h5>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={cat} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>إلكترونيات</strong></p>
                                            <p><small>15 أكتوبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={cat} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>أجهزة منزلية</strong></p>
                                            <p><small>15 نوفمبر - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={cat} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>ساعات</strong></p>
                                            <p><small>15 مارس - 4:21 م</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-recent-order new">
                                    <div className="order-img-user online">
                                        <img alt="avatar" src={cat} />
                                    </div>
                                    <div className="admin-recent-order-body">
                                        <div>
                                            <p><strong>ملابس</strong></p>
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

export default DashboardLastCat;
