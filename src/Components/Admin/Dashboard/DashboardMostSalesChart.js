import React from 'react'
import { Col, Row, ProgressBar } from 'react-bootstrap';

const DashboardMostSalesChart = () => {
    return (
        <div className='cusom-card-container mb-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>الأكثر مبيعا</h5>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col xs={12} sm={12} md={5}>
                                <p className='most-seller-chart-text'>ايفون اكس اس ماكس</p>
                            </Col>
                            <Col xs={12} sm={12} md={5} >
                                <ProgressBar now={60} variant='progressBc' className='mt-1 most-seller-progress' />
                            </Col>
                            <Col xs={12} sm={12} md={2}>
                                <p className='most-seller-chart-text'>60</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5}>
                                <p className='most-seller-chart-text'>ايفون اكس اس</p>
                            </Col>
                            <Col xs={12} sm={12} md={5} >
                                <ProgressBar now={25} variant='progressBc' className='mt-1 most-seller-progress' />
                            </Col>
                            <Col xs={12} sm={12} md={2}>
                                <p className='most-seller-chart-text'>25</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5}>
                                <p className='most-seller-chart-text'>لاب توب اتش بي</p>
                            </Col>
                            <Col xs={12} sm={12} md={5} >
                                <ProgressBar now={15} variant='progressBc' className='mt-1 most-seller-progress' />
                            </Col>
                            <Col xs={12} sm={12} md={2}>
                                <p className='most-seller-chart-text'>15</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5}>
                                <p className='most-seller-chart-text'>ساعة ابل ذكية</p>
                            </Col>
                            <Col xs={12} sm={12} md={5} >
                                <ProgressBar now={7} variant='progressBc' className='mt-1 most-seller-progress' />
                            </Col>
                            <Col xs={12} sm={12} md={2}>
                                <p className='most-seller-chart-text'>7</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardMostSalesChart;
