import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItemCard from './CartItemCard';

const CartItem = ({ customClass, qtyAddClass, qtyShowClass }) => {
    return (
        <Col xs="12" className={`cart-table-div my-2 px-2 ${customClass}`}>
             <Table responsive className={`cart-table ${customClass}`}>
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
                    <CartItemCard qtyAddClass={qtyAddClass} qtyShowClass={qtyShowClass} />
                    <CartItemCard qtyAddClass={qtyAddClass} qtyShowClass={qtyShowClass} />
                    <CartItemCard qtyAddClass={qtyAddClass} qtyShowClass={qtyShowClass} />
                </tbody>
            </Table>
            <ToastContainer />
        </Col>
    );
}

export default CartItem