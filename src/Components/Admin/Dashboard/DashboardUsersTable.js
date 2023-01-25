import React from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import user from '../../../assets/images/user.png';

const DashboardUsersTable = () => {
    return (
        <div className='cusom-card-container mb-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>المستخدمين</h5>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col xs={12} lg={12}>
                                <Table bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>الاسم</th>
                                            <th>الصورة</th>
                                            <th>تاريخ الإنضمام</th>
                                            <th>الصلاحية</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>أحمد حسن</td>
                                            <td>
                                                <img
                                                    src={user}
                                                    alt='user'
                                                    width='35px'
                                                    height='35px'
                                                />
                                            </td>
                                            <td> 1 نوفمبر 2019</td>
                                            <td>أدمن</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>مصطفى كامل</td>
                                            <td>
                                                <img
                                                    src={user}
                                                    alt='user'
                                                    width='35px'
                                                    height='35px'
                                                />
                                            </td>
                                            <td> 1 نوفمبر 2019</td>
                                            <td>مدير</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ياسر حسن</td>
                                            <td>
                                                <img
                                                    src={user}
                                                    alt='user'
                                                    width='35px'
                                                    height='35px'
                                                />
                                            </td>
                                            <td> 1 نوفمبر 2019</td>
                                            <td>مستخدم</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>أيمن لطفي</td>
                                            <td>
                                                <img
                                                    src={user}
                                                    alt='user'
                                                    width='35px'
                                                    height='35px'
                                                />
                                            </td>
                                            <td> 1 نوفمبر 2019</td>
                                            <td>مستخدم</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardUsersTable;
