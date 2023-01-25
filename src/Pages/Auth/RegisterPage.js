import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <Container style={{ minHeight: '660px' }}>
                <Row className='py-5 d-flex justify-content-center'>
                    <Col className='d-flex flex-column'>
                        <label className='mx-auto title-login'>إنشاء حساب جديد</label>
                        <input
                            placeholder='اسم المستخدم'
                            type='text'
                            className='user-input mt-3 mx-auto p-1'
                        />
                        <input
                            placeholder='البريد الإلكتروني'
                            type='text'
                            className='user-input my-3 mx-auto p-1'
                        />
                        <input
                            placeholder='كلمة السر'
                            type='text'
                            className='user-input mx-auto p-1'
                        />
                        <button className='btn-login mx-auto mt-4'>إنشاء الحساب</button>
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
        </div>
    );
}

export default RegisterPage;
