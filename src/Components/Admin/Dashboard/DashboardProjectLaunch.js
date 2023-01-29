import React from 'react';
import { Col, Row } from 'react-bootstrap';
import launch from '../../../assets/images/launch.png';

const DashboardProjectLaunch = () => {
    return (
        <div className='cusom-card-container mb-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <Row>
                            <Col xs={12} lg={6}>
                                <div>
                                    <h5>إنطلاق المشروع</h5>
                                </div>
                                <p className='my-1'>تم إطلاق المشروع بكامل طاقته</p>
                                <h4 className='project-launch-title'>3 سنوات</h4>
                                <p className='project-launch-date my-2'>28 مارس 2019</p>
                            </Col>
                            <Col xs={12} lg={6}>
                                <img
                                    src={launch}
                                    alt='launch'
                                    width='150px'
                                    height='180px'
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardProjectLaunch;
