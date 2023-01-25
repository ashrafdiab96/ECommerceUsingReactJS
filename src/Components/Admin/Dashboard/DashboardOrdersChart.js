import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { PieChart, Pie, Cell } from 'recharts';

const DashboardOrdersChart = () => {
    const data = [
        {name: 'Delieverd', value: 79},
        {name: 'Not Delieverd', value: 21}
    ];
    const COLORS = ['#6259ca', '#ededed'];

    return (
        <div className='cusom-card-container mb-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>حالة توصيل الطلبات</h5>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col xs={12} lg={6}>
                                <PieChart width={150} height={155}>
                                    <Pie 
                                        data={data} 
                                        cx={65} 
                                        cy={65}
                                        labelLine={false}
                                        innerRadius={57} 
                                        outerRadius={71}
                                        fill="#ededed"
                                        textAnchor='end'
                                    >
                                        {
                                            data.map((entry, index) => {
                                                return (
                                                    <Cell fill={COLORS[index % COLORS.length]}/>
                                                );
                                            })
                                        }
                                    </Pie>
                                </PieChart>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <h5 className='orders-chart-text'>2400 طلب</h5>
                                    <p className='text-muted m-1'>تم توصيل: 1896</p>
                                    <p className='text-muted'>لم يتم توصيل: 504</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardOrdersChart;
