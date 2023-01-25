import React from 'react'
import CartItem from '../../Cart/CartItem';
import OrderUserDetails from './OrderUserDetails';

const AdminOrderDetails = () => {
    return (
        <div>
            <CartItem />
            <OrderUserDetails />
        </div>
    );
}

export default AdminOrderDetails;
