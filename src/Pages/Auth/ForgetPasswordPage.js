import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { ForgetPasswordHook } from '../../hook/auth/forget-password-hook';

const ForgetPasswordPage = () => {
    const [
        email, loading, isPress, onChangeEmail, onSubmit
    ] = ForgetPasswordHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <Container style={{ minHeight: '660px' }}>
                <Row className='py-5 d-flex justify-content-center'>
                    <Col className='d-flex flex-column'>
                        <label className='mx-auto title-login'>إستعادة كلمة السر</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder='البريد الإلكتروني'
                            type='text'
                            className='user-input my-3 mx-auto p-1'
                        />
                        <button
                            className='btn-login mx-auto mt-2'
                            onClick={onSubmit}
                        >
                            {
                                isPress ? loading ? (
                                    <Spinner animation='border' variant='light' className='m-auto' />
                                ) : null : <span>إرسال الكود</span>
                            }
                        </button>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default ForgetPasswordPage;
