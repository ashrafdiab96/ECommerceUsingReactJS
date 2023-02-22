import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import add from '../../../assets/images/add.png';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import EditProductAdminHook from '../../../hook/admin/edit-product-admin-hook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AdminEditProduct = () => {
    const {id} = useParams();
    const [
        crop, images, setImages, prodName, setProdName, prodDesc, setProdDesc, 
        priceBefore, setPriceBefore, priceAfter, setPriceAfter, qty, setQty,
        brandId, colors, showColor, onChangeColor, options, isPress, loading,
        categories, onSelectCategory, onSelectParentCat, onRemoveParentCat,
        onSelectedBrand, brands, removeColor, handleColorChange, handleSubmit,
        catId
    ] = EditProductAdminHook(id);

    return (
        <div style={{ minHeight: '670px' }}>
            <div className='admin-add-brand'>
                <Row className="justify-content-start ">
                    <h4 className="pb-4 text-center"> تعديل منتج</h4>
                    <Col sm={12}>
                        <div className="text-form pb-2"> صور للمنتج</div>
                        <MultiImageInput
                            images={images}
                            setImages={setImages}
                            theme={{
                                background: '#ffffff',
                                outlineColor: '#C0C0C0',
                                textColor: 'rgba(255,255,255,0.6)',
                                buttonColor: '#ff0e1f',
                                modalColor: '#ffffff',
                            }}
                            allowCrop={false}
                            cropConfig={{ crop, ruleOfThirds: true }}
                            max={4}
                        />
                        <input
                            value={prodName}
                            onChange={e => setProdName(e.target.value)}
                            type="text"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="اسم المنتج"
                        />
                        <textarea
                            value={prodDesc}
                            onChange={e => setProdDesc(e.target.value)}
                            className="admin-add-input p-2 mt-3"
                            rows="4"
                            cols="50"
                            placeholder="وصف المنتج"
                        />
                        <input
                            value={priceBefore}
                            onChange={e => setPriceBefore(e.target.value)}
                            type="number"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="السعر قبل الخصم"
                        />
                        <input
                            value={priceAfter}
                            onChange={e => setPriceAfter(e.target.value)}
                            type="number"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="السعر بعد الخصم"
                        />
                        <input
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                            type="number"
                            className="admin-add-input d-block mt-3 px-3"
                            placeholder="الكمية المتاحة"
                        />
                        <select
                            value={catId}
                            onChange={onSelectCategory}
                            name="cats"
                            className="admin-add-select mt-3 px-2 ">
                            <option value="0">التصنيف الرئيسي</option>
                            {categories.data ? (
                                categories.data.map((item) => {
                                    return (
                                        <option
                                            value={item._id}
                                            key={item._id}
                                            // className='py-1'
                                        >{item.name}</option>
                                    )
                                })
                            ) : null}
                        </select>
                        <Multiselect
                            className="mt-3 text-end admin-add-multi-select"
                            placeholder="التصنيف الفرعي"
                            options={options}
                            onSelect={onSelectParentCat}
                            onRemove={onRemoveParentCat}
                            displayValue="name"
                            style={{ color: "red" }}
                        />
                        <select
                            value={brandId}
                            onChange={onSelectedBrand}
                            name="brand"
                            id="brand"
                            className="admin-add-select mt-3 px-2 ">
                            <option value="0">الماركة</option>
                            {brands.data ? (
                                brands.data.map((item) => {
                                    return (
                                        <option
                                            value={item._id}
                                            key={item._id}
                                            // className='py-1'
                                        >{item.name}</option>
                                    )
                                })
                            ) : null}
                        </select>
                        <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                        <div className="mt-1 d-flex">
                            {colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}
                                            onClick={() => removeColor(color)}
                                        ></div>
                                    )
                                })
                            ) : null}
                            <div className='d-inline' style={{ position: 'relative' }}>
                                <img
                                    src={add} alt='alt' width="30px" height="35px"
                                    style={{ cursor: 'pointer' }}
                                    onClick={onChangeColor}
                                />
                                <div style={{
                                    position: 'absolute', top: '-20px', left: '-250px'
                                }}>
                                    {showColor === true ? (
                                        <CompactPicker onChangeComplete={handleColorChange} />
                                    ) : null}
                                </div>
                            </div>
                        </div>
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
    );
}

export default AdminEditProduct;