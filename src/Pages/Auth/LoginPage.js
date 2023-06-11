import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginHook } from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [
        email, password, loading, isPress,
        onChangeEmail, onChangePassword, onSubmit
    ] = LoginHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <Container style={{ minHeight: '660px' }}>
                <Row className='py-5 d-flex justify-content-center'>
                    <Col className='d-flex flex-column'>
                        <label className='mx-auto title-login'>تسجيل الدخول</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder='البريد الإلكتروني'
                            type='text'
                            className='user-input my-3 mx-auto p-1'
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder='كلمة السر'
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
                                ) : null : <span>تسجيل الدخول</span>
                            }
                        </button>
                        <label className='mx-auto mt-4'>
                            ليس لديك حساب{" "}
                            <Link to='/register' className='text-decoration-none'>
                                <span style={{ cursor: 'pointer' }} className='text-danger'>
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                        <label className='mx-auto mt-2'>
                            <Link to='/user/forget-password' className='text-decoration-none'>
                                هل نسيت كلمة السر؟
                            </Link>
                        </label>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default LoginPage;
