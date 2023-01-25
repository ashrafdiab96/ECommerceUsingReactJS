import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { UserOrderItem } from './UserOrderItem';

const UserOrderDetails = () => {
    return (
        <Col xs="12" className='cart-table-div my-2 px-2'>
             <Table responsive className='cart-table'>
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>الكمية</th>
                        <th>السعر</th>
                        <th>حالة التوصيل</th>
                        <th>تاريخ الطلب</th>
                        <th>تاريخ التوصيل</th>
                    </tr>
                </thead>
                <tbody>
                    <UserOrderItem />
                    <UserOrderItem />
                    <UserOrderItem />
                </tbody>
            </Table>
        </Col>
    );
}

export default UserOrderDetails;