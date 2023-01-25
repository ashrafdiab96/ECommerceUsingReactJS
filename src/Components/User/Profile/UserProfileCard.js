import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../../assets/images/user.png';
import { TfiUser, TfiSaveAlt, TfiHeart, TfiCreditCard, TfiPowerOff } from 'react-icons/tfi';

const UserProfileCard = () => {
    return (
        <div className='card custom-card-user'>
            <div className='card-body p-0'>
                <div className='pt-3 pb-1 px-3'>
                    <h4 className='my-acc'>حسابي</h4>
                </div>
                <div className='user-card-line mb-3'></div>
                <div className='card-item'>
                    <div className='user-prof-data'>
                        <img
                            src={user}
                            alt='user'
                            width='120px'
                            height='120px'
                        />
                        <p className='user-prof-name'>أشرف دياب</p>
                    </div>
                    <div className='user-prof-list'>
                        <ul className='list-unstyled m-0 p-0'>
                            <div className='user-card-line'></div>
                            <div className='user-prof-link'>
                                <Link to='/user/orders'>
                                    <li>
                                        <span className='user-prof-icon'>
                                            <TfiUser />
                                        </span>
                                        <span className='user-prof-list-item mx-3'>طلباتي</span>
                                    </li>
                                </Link>
                            </div>
                            <div className='user-card-line'></div>
                            <div className='user-prof-link'>
                                <Link to='/user/addresses'>
                                    <li>
                                        <span className='user-prof-icon'>
                                            <TfiSaveAlt />
                                        </span>
                                        <span className='user-prof-list-item mx-3'>العناوين</span>
                                    </li>
                                </Link>
                            </div>
                            <div className='user-card-line'></div>
                            <div className='user-prof-link'>
                                <Link to='/user/wishlist'>
                                    <li>
                                        <span className='user-prof-icon'>
                                            <TfiHeart />
                                        </span>
                                        <span className='user-prof-list-item mx-3'>المفضلة</span>
                                    </li>
                                </Link>
                            </div>
                            <div className='user-card-line'></div>
                            <div className='user-prof-link'>
                                <Link to='/user/editProfile'>
                                    <li>
                                        <span className='user-prof-icon'>
                                            <TfiCreditCard />
                                        </span>
                                        <span className='user-prof-list-item mx-3'>حسابي</span>
                                    </li>
                                </Link>
                            </div>
                            <div className='user-card-line'></div>
                            <div className='user-prof-link last-link'>
                                <Link to='/user/logout'>
                                    <li>
                                        <span className='user-prof-icon'>
                                            <TfiPowerOff />
                                        </span>
                                        <span className='user-prof-list-item mx-3'>تسجيل الخروج</span>
                                    </li>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;
