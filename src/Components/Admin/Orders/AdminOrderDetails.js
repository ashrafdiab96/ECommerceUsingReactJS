import React from 'react'
import CartItem from '../../Cart/CartItem';
import OrderUserDetails from './OrderUserDetails';

const AdminOrderDetails = () => {
    return (
        <div>
            <CartItem
                customClass=' admin-cart-table-div'
                qtyAddClass=' admin-cart-qty-add'
                qtyShowClass=' admin-cart-qty-show'
            />
            <OrderUserDetails />
        </div>
    );
}

export default AdminOrderDetails;
