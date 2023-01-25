import React from 'react';
import { Row, Col } from 'react-bootstrap';
import rate from '../../assets/images/rate.png';
import user from '../../assets/images/user.png';

const RateItem = () => {
    return (
        <div>
            <Row className="mt-3">
                <Col className="d-felx flex-column me-5">
                    <div>
                        <Row>
                            <Col xs={3}>
                                <div className='user'>
                                    <Row>
                                        <Col xs={3}>
                                            <img
                                                src={user}
                                                alt='user'
                                                width='40px'
                                                height='40px'
                                            />
                                        </Col>
                                        <Col xs={9} className='d-flex flex-column'>
                                            <p className='m-0'>احمد محمود</p>
                                            <div>
                                                <small className='text-muted'>23 أبريل 2022</small>
                                                &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;               
                                                <img className="" src={rate} alt="" height="16px" width="16px" />
                                                <div className="cat-rate d-inline p-1 pt-2">4.3</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="rate-name d-inline ms-2">
                        <div className='d-flex align-items-center'>
                            <img
                                src={user}
                                alt='user'
                                width='50px'
                                height='50px'
                            />
                            <p>احمد محمود</p>
                        </div>
                    </div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate d-inline p-1 pt-2">4.3</div> */}
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default RateItem