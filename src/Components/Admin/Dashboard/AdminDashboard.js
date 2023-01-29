import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardCard from './DashboardCard';
import DashboardIntro from './DashboardIntro';
import DashboardMostSalesChart from './DashboardMostSalesChart';
import DashboardOrdersChart from './DashboardOrdersChart';
import DashboardSalesChart from './DashboardSalesChart';
import DashboardOrders from './DashboardOrderss';
import DashboardUsersTable from './DashboardUsersTable';
import DashboardProjectLaunch from './DashboardProjectLaunch';
import DashboardLastCat from './DashboardLastCat';
import DashboardLastBrands from './DashboardLastBrands';

const AdminDashboard = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <Row>
                <Col sm={12} className='my-2'>
                    <h4 className='admin-products-title'>الداشبورد</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    {/* <DashboardIntro /> */}
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    <DashboardCard />
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    <DashboardSalesChart />
                </Col>
            </Row>       
            <Row>
                <Col xs={12} sm={12} md={4}>
                    <DashboardOrdersChart />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <DashboardMostSalesChart />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <DashboardProjectLaunch />
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    <DashboardUsersTable />
                </Col>
            </Row>
            <Row className='mb-3'>
                {/* <Col xs={12} sm={12} md={1}></Col> */}
                <Col xs={12} sm={12} md={6}>
                    <DashboardOrders />
                </Col>
                {/* <Col xs={12} sm={12} md={2}> */}
                    {/* <DashboardLastBrands /> */}
                {/* </Col> */}
                <Col xs={12} sm={12} md={6}>
                    <DashboardLastCat />
                </Col>
                {/* <Col xs={12} sm={12} md={1}></Col> */}
            </Row>
        </div>
    );
}

export default AdminDashboard;
