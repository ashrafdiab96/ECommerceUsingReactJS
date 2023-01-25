import React from 'react';
import { Col, Row } from 'react-bootstrap';
import dashIntro from '../../../assets/images/dash-intro.png';

const DashboardIntro = () => {
    return (
        <div>
            <div className="intro-custom-card card">
                <div className="p-4 card-body">
                    <Row>
                        <Col xs={6} md={9}>
                            <h4 className="d-flex mb-3">
                                <span className="font-weight-bold text-white ">
                                    خزينك للتجارة الإلكترونية
                                </span>
                            </h4>
                            <p className="tx-white-7 mb-1">
                                خزينك للتجارة الإلكترونية, شركة ناشئة متخصصة ف التجارة الإلكترونية حققت نسبة نمو
                                <b className="text-warning"> 57%</b> 
                                منذ إنشاؤها.
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <img src={dashIntro} className='intro-custom-card-img' alt="intro" />
                        </Col>                        
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default DashboardIntro;
