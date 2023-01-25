import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mobile from '../../../assets/images/mobile.png';

const AdminOrdersCard = () => {
    return (
        <Col sm="12">
            <Link
                to="/admin/orders/23"
                className="admin-order-body my-2 px-1 d-flex"
            >
                <img width="160px" height="197px" src={mobile} alt="" />
                <div className="w-100 p-3">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #2321</div>
                            <div className="d-inline pt-2 cat-text">
                                <button className='btn btn-danger btn-sm btn-flat'>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
                                تايم (برودكت) أحمر
                            </div>
                            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className=" d-flex">
                            <div className="mt-2  cat-text d-inline">الماركة :</div>
                            <div className="mt-1 barnd-text d-inline mx-1">ابل </div>
                            <div
                                className="color  me-1 border"
                                style={{ backgroundColor: "#E52C2C" }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminOrdersCard;