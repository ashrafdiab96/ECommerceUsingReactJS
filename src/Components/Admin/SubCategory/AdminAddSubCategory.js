import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddSubcategoryHook from '../../../hook/subcategory/add-subcategory-hook';

const AdminAddSubCategory = () => {
    const [
        id, name, categories, loading, isPress, handleIdChange,
        handleNameChange, handleSubmit
    ] = AddSubcategoryHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="text-center pb-4">اضافه تصنيف فرعي جديد</h4>
                    <Col sm={12}>
                        <input
                            value={name}
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم التصنيف الفرعي"
                            onChange={handleNameChange}
                        />
                        <select
                            name="categories" id="cat"
                            className="admin-add-select mt-3 px-2 "
                            onChange={handleIdChange}
                            value={id}
                        >
                            <option value="0">اختر تصنيف رئيسي</option>
                            {categories.data ? (
                                categories.data.map((item) => {
                                    return (
                                        <option
                                            value={item._id}
                                            key={item._id}
                                            className='py-1'
                                        >{item.name}</option>
                                    )
                                })
                            ) : null}
                        </select>
                    </Col>
                    <Col sm={12}>
                        <button
                            className="custom-btn px-3 mt-2 d-flex justify-content-center align-items-center"
                            onClick={handleSubmit}
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

export default AdminAddSubCategory