import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddCategoryHook from '../../../hook/categories/add-category-hook';

const AdminAddCategory = () => {
    const [
        img, name, loading, isPress, handleSubmit, onImageChange, onChangeName
    ] = AddCategoryHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="text-center pb-4">اضافه تصنيف جديد</h4>
                    <Col sm={12}>
                        <div className="text-form pb-2">صوره التصنيف</div>
                        <div>
                            <label htmlFor='upload-photo'>
                                <img
                                    src={img}
                                    alt='avatar'
                                    height='100px'
                                    width='120px'
                                    style={{ cursor: 'pointer' }}
                                />
                            </label>
                            <input
                                type='file'
                                name='photo'
                                onChange={onImageChange}
                                id='upload-photo'
                            />
                        </div>
                        <input
                            type="text"
                            onChange={onChangeName}
                            value={name}
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم التصنيف"
                        />
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end ">
                        <button
                            onClick={handleSubmit}
                            className="custom-btn d-inline mt-2 d-flex justify-content-center align-items-center"
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

export default AdminAddCategory;