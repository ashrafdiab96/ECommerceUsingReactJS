import React from 'react';
import { Col } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UserAddressCard = () => {
    return (
        <div>
            <Col xs ={12} className='cart-table-div my-2 px-2'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex flex-column align-items-start px-3'>
                        <h5 className='mb-4'>المنزل</h5>
                        <p className='mb-1'>مصر - القاهرة</p>
                        <p className='mb-1'><strong>العنوان:&nbsp;&nbsp;</strong> 8 شارع ابن النفيس - مكرم عبيد - المنطقة السادسة - مدينة نصر أول - القاهرة</p>
                        <p className='mb-1'><strong>علامة مميزة:&nbsp;&nbsp;</strong> أمام مدرسة ابن النفيس - بجوار مسجد دار الأرقم - خلف حديقة الطفل</p>
                        <p className='mb-1'><strong>الرقم البريدي:&nbsp;&nbsp;</strong> 11765</p>
                        <p className='mb-1'><strong>رقم الهاتف:&nbsp;&nbsp;</strong> 01020869595</p>
                    </div>
                    <div className='d-flex'>
                        <Link to='/user/addresses/:id/edit' className='user-address-link text-warning'>
                            <AiOutlineEdit size={20} className='mx-3' />
                        </Link>
                        <Link to='/user/addresses/:id/delete' className='user-address-link text-danger'>
                            <AiOutlineDelete size={20} />
                        </Link>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default UserAddressCard;
