import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItemCard from './CartItemCard';

const CartItem = () => {
    return (
        <Col xs="12" className='cart-table-div my-2 px-2'>
             <Table responsive className='cart-table'>
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>الحالة</th>
                        <th>الكمية</th>
                        <th>السعر</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />
                </tbody>
            </Table>
            <ToastContainer />
        </Col>
    );
}

export default CartItem