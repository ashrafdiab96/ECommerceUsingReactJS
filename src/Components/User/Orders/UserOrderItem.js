import React from 'react';
import mobile from '../../../assets/images/mobile.png';

export const UserOrderItem = () => {
    return (
        <tr>
            <td>
                <div className='d-flex justify-content-start align-items-center'>
                    <img
                        src={mobile}
                        alt='product'
                        width='60px'
                        height='80px'
                    />
                    <div className='mx-2'>
                        <h6>أيفون أكس اس ماكس</h6>
                        <p className='m-0'>
                            <strong>اللون: </strong>
                            <small className='text-muted'>أحمر</small>
                        </p>
                    </div>
                </div>
            </td>
            <td>2</td>
            <td>8500 جنيه</td>
            <td>
                <span className='order-status custom-bg-success'></span>
                <span>تم التوصيل</span>
            </td>
            <td>1 يناير 2023</td>
            <td>4 يناير 2023</td>
        </tr>  
    );
}
