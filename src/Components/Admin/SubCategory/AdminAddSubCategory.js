import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AdminAddSubCategory = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="text-center pb-4">اضافه تصنيف فرعي جديد</h4>
                    <Col sm={12}>
                        <input
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم التصنيف الفرعي"
                        />
                        <select name="languages" id="lang" className="admin-add-select mt-3 px-2 ">
                            <option value="val">التصنيف الاول</option>
                            <option value="val2">التصنيف الثاني</option>
                            <option value="val2">التصنيف الثالث</option>
                            <option value="val2">التصنيف الرابع</option>
                        </select>
                    </Col>
                    <Col sm={12}>
                        <button className="custom-btn px-3 mt-2 ">حفظ التعديلات</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AdminAddSubCategory