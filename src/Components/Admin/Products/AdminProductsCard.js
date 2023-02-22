import React from 'react'
import { Button, Card, Col, Modal, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai';
import DeleteProductAdminHook from '../../../hook/admin/delete-product-admin-hook';

const AdminProductsCard = ({ product, pagination }) => {
    const [
        show,handleDeleteClose, handleDeleteShow, handleDeleteProduct, loading
    ] = DeleteProductAdminHook(product._id, pagination.cuurentPage);

    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Modal show={show} className='item-flat' onHide={handleDeleteClose}>
                <Modal.Header className='py-1'>
                    <Modal.Title>حذف المنتج</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <AiFillWarning className='text-danger mb-2' size={50} />
                    <h6>هل أنت متأكد من أنك تريد حذف المنتج {product.title}</h6>
                    <p>لن تتمكن من إستعادة البيانات مرة أخرى</p>
                </Modal.Body>
                <Modal.Footer className='py-1'>
                    <Button variant="dark" className='btn-sm item-flat' onClick={handleDeleteClose}>
                        إلغاء
                    </Button>
                    <Button variant="danger" className='btn-sm item-flat px-4' onClick={handleDeleteProduct}>
                        {loading ? (
                            <Spinner
                                animation='border'
                                variant='light'
                                className='m-auto'
                                style={{ height: '15px', width: '15px' }}
                            />
                        ) : (<span>تأكيد الحذف</span>)}
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card className="my-2 admin-product-card">
                <Row className="d-flex justify-content-center px-2">
                    <Col className="d-flex justify-content-between">
                        <div className="d-inline item-delete-edit">
                            <i className="fa fa-trash text-danger" onClick={handleDeleteShow}></i>
                        </div>
                        <div className="d-inline item-delete-edit">
                            <Link to={`/admin/editProduct/${product._id}`}>
                                <i className="fas fa-edit text-warning"></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img
                        style={{ height: "228px", width: "100%" }}
                        src={product.imageCover}
                    />
                </Link>
                <Card.Body>
                    <Card.Title>
                        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Link>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card-rate">
                                {product.ratingsAverage ? product.ratingsAverage : 0}
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card-price">
                                    {product.priceAfterDiscount ? product.priceAfterDiscount : product.price}
                                </div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AdminProductsCard;
