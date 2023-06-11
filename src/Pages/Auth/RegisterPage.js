import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RegisterHook } from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
    const [
        name, phone, email, password, confirmPassword, loading,
        onChangeName, onChangePhone, onChangeEmail, onChangePassword,
        onChangeConfirmPasswors, onSubmit, isPress
    ] = RegisterHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <Container style={{ minHeight: '660px' }}>
                <Row className='py-5 d-flex justify-content-center'>
                    <Col className='d-flex flex-column'>
                        <label className='mx-auto title-login'>إنشاء حساب جديد</label>
                        <input
                            value={name}
                            onChange={onChangeName}
                            placeholder='اسم المستخدم'
                            type='text'
                            className='user-input mt-3 mx-auto p-1'
                        />
                        <input
                            value={phone}
                            onChange={onChangePhone}
                            placeholder='الهاتف'
                            type='number'
                            className='user-input mt-3 mx-auto p-1'
                        />
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder='البريد الإلكتروني'
                            type='text'
                            className='user-input mt-3 mx-auto p-1'
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder='كلمة السر'
                            type='password'
                            className='user-input my-3 mx-auto p-1'
                        />
                        <input
                            value={confirmPassword}
                            onChange={onChangeConfirmPasswors}
                            placeholder='تأكيد كلمة السر'
                            type='password'
                            className='user-input mx-auto p-1'
                        />
                        <button
                            className='btn-login mx-auto mt-4'
                            onClick={onSubmit}
                        >
                            {
                                isPress ? loading ? (
                                    <Spinner animation='border' variant='light' className='m-auto' />
                                ) : null : <span>إنشاء الحساب</span>
                            }
                        </button>
                        <label className='mx-auto my-4'>
                            لديك حساب بالفعل{" "}
                            <Link to='/login' className='text-decoration-none'>
                                <span style={{ cursor: 'pointer' }} className='text-danger'>
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default RegisterPage;
