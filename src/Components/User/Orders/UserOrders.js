import React from 'react';
import Pagination from '../../Utilities/Pagination';
import UserOrderCard from './UserOrderCard';

const UserOrders = () => {
    return (
        <div>
            <div>
                <h4 className='my-4'>كل الطلبات</h4>
            </div>
            <UserOrderCard />
            <UserOrderCard />
            <UserOrderCard />
            <UserOrderCard />
            <Pagination />
        </div>
    );
}

export default UserOrders;
