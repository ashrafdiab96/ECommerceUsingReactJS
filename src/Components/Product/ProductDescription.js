import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import GetProductDetailsHook from '../../hook/products/get-product-details-hook';

const ProductDescription = () => {
    const {id} = useParams();
    const [item, similarProds] = GetProductDetailsHook(id);

    return (
        <div className='py-4 px-5'>
            <Row className="mt-2">
                <div className="cat-text">{item.category?.name}</div>
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        <div className="cat-rate d-inline mx-3">
                            {item.ratingAverage ? item.ratingAverage : 0}
                        </div>
                        <span>{item.title}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">الماركة :</div>
                    <div className="barnd-text d-inline mx-1">{item.brand?.name}</div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                    {item.colors ? (
                        item.colors.map(color => {
                            return (
                                <div
                                    className="color ms-2 border"
                                    style={{ backgroundColor: color }}
                                ></div>
                            )
                        })
                    ) : null}
                </Col>
            </Row>
  
            <Row className="mt-4">
            <div className="cat-text">وصف المنتج :</div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                        {item.description}
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <div className="product-price d-inline px-3 py-2 border">
                        {item.priceAfterDiscount ? item.priceAfterDiscount : item.price } جنية 
                    </div>
                    <div className="custom-btn px-3 py-2 d-inline mx-3">اضف للعربة</div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDescription;
