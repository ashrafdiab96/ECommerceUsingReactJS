import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddBrandHook from '../../../hook/brands/add-brand-hook';

const AdminAddBrand = () => {
    const [
        img, name, loading, isPress, handleSubmit, onImageChange, onNameChange
    ] = AddBrandHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start">
                    <h4 className="text-center pb-4">اضف ماركه جديده</h4>
                    <Col sm={12}>
                        <div className="text-form pb-2">صوره الماركه</div>
                        <div>
                            <label htmlFor='upload-photo'>
                                <img
                                    src={img}
                                    alt='avatar'
                                    height="100px"
                                    width="120px"
                                    style={{ cursor: 'pointer' }}
                                />
                            </label>
                            <input
                                type='file'
                                name= 'photo'
                                onChange={onImageChange}
                                id='upload-photo'
                            />
                        </div>
                        <input
                            type="text"
                            onChange={onNameChange}
                            value={name}
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم الماركه"
                        />
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end ">
                        <button
                            onClick={handleSubmit}
                            className="custom-btn mt-2 d-flex justify-content-center align-items-center"
                        >
                            {
                                isPress ? loading ? (
                                    <Spinner animation='border' variant='light' className='m-auto' />
                                ) : null : <span>حفظ التعديلات</span>
                            }
                        </button>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminAddBrand;