import React from 'react'
import { Card, Col} from 'react-bootstrap';
import prod1 from '../../assets/images/prod1.png';
import favoff from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

const ProductCard = () => {
    return (
        <Col xs={6} sm={6} md={4} lg={3} className='d-flex'>
            <Card className='my-2 product-card'>
                <Link to='/products/:id' className='product-title-img'>
                    <Card.Img style={{ height: '220px', width: '100%' }} src={prod1} />
                </Link>
                <div className='d-flex justify-content-end mx-2'>
                    <img
                        src={favoff}
                        className='text-center'
                        alt='product'
                        style={{ height: '24px', width: '26px', }}
                    />
                </div>
                <Card.Body>
                    <Link to='/products/:id' className='product-title'>
                        <Card.Title>
                            <div className='text-center'>
                                كود كوبون ساعة يد ذكية بيب إس أسود كربون{" "}
                            </div>
                        </Card.Title>
                    </Link>
                    <Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex'>
                                <img
                                    className=''
                                    src={rate}
                                    alt='rate'
                                    height='16px'
                                    width='16px'
                                />
                                <div className='card-rate mx-2'>4.5</div>
                            </div>
                            <div className='d-flex'>
                                <div className='card-price'>888</div>
                                <div className='card-currency mx-1'>جنيه</div>
                            </div>
                        </div>
                            <Link to='/cart/add'>
                                <button className='custom-btn my-2'>
                                    <BiCart size={22} />
                                    <span className='mx-1'>أضف إلى العربة</span>
                                </button>
                            </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;
