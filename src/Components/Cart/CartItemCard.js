import React,  { useState } from 'react';
import mobile from '../../assets/images/mobile.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItemCard = () => {
    const [itemQty, setItemQty] = useState(1);
    const notify = (message, type) => {
        if (type === 'error') {
            toast.error(message);
        } else if (type === 'success') {
            toast.success(message);
        }
    };

    const increaseQty = () => {
        setItemQty(itemQty + 1)
    };
    
    const decreaseQty = () => {
        if (itemQty <= 1) {
            const message = 'الكمية المطلوبة يجب أن لا تقل عن 1';
            notify(message, 'error');
        } else {
            setItemQty(itemQty - 1);
        }
    };

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
            <td>
                <small className='text-danger'>إنتهى من المخزن</small>
            </td>
            <td>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        className='d-inline cart-qty-add'
                        onClick={increaseQty}
                    >+</div>
                    <div className='d-inline cart-qty-show'>{itemQty}</div>
                    <div
                        className='d-inline cart-qty-add'
                        onClick={decreaseQty}
                    >-</div>
                </div>
            </td>
            <td>8500 جنيه</td>
            <td>
                <div className='text-center'>
                    <i className="fa fa-trash text-danger" style={{ cursor: 'pointer' }}></i>
                </div>
            </td>
        </tr>
    );
}

export default CartItemCard;
