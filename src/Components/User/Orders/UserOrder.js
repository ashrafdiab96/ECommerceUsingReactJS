import React from 'react';
import UserOrderDetails from './UserOrderDetails';

const UserOrder = () => {
    return (
        <div>
            <div>
                <h4 className='my-4'>تفاصيل الطلب</h4>
            </div>
            <UserOrderDetails />
        </div>
    );
}

export default UserOrder;
