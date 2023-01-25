import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TfiFiles } from 'react-icons/tfi';
import prod1 from '../../../assets/images/prod1.png';
import mobile from '../../../assets/images/mobile.png';

const UserOrderCard = () => {
    return (
        <div className='card custom-card-user'>
            <div className='user-prof-orders'>
                <Card>
                    <Card.Header as="h5">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='user-order-title'>
                                    <p className='mb-2'>تاريخ الشراء</p>
                                    <p className='m-0'>5 أكتوبر 2022</p>
                                </div>
                                <div className='user-order-title mx-5'>
                                    <p className='mb-2'>الإجمالي</p>
                                    <p className='m-0'>2450 ج.م</p>
                                </div>
                            </div>
                            <div>
                                <div className='user-order-title'>
                                    <p className='mb-2'>طلب #123 654 789</p>
                                    <p className='m-0'>
                                        <Link to='/user/orders/:id'>
                                            <TfiFiles />&nbsp;&nbsp;
                                            <span>تفاصيل الطلب</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h6 className='user-order-deliverd mb-4'>تم التوصيل في 13 أكتوبر 2022</h6>
                        </Card.Title>
                        <Card.Text>
                            <div className='user-order-details'>
                                <div className='d-flex justify-between align-items-center'>
                                    <div className='d-flex'>
                                        <img
                                            src={prod1}
                                            alt='product'
                                            width='140px'
                                            height='120px'
                                        />
                                        <div className='d-flex flex-column mx-3'>
                                            <p className='m-0'>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر</p>
                                            <p className='m-0'>الماركة: سامسونج</p>
                                            <p className='m-0'>اللون: فضي</p>
                                            <p className='m-0'>السعر: 3000 ج.م</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <div className='user-card-line'></div>
                    <Card.Body>
                        <Card.Title>
                            <h6 className='user-order-deliverd mb-4'>تم التوصيل في 13 أكتوبر 2022</h6>
                        </Card.Title>
                        <Card.Text>
                            <div className='user-order-details'>
                                <div className='d-flex justify-between align-items-center'>
                                    <div className='d-flex'>
                                        <img
                                            src={mobile}
                                            alt='product'
                                            width='140px'
                                            height='120px'
                                        />
                                        <div className='d-flex flex-column mx-3'>
                                            <p className='m-0'>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر</p>
                                            <p className='m-0'>الماركة: سامسونج</p>
                                            <p className='m-0'>اللون: فضي</p>
                                            <p className='m-0'>السعر: 3000 ج.م</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default UserOrderCard;
