import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../../assets/images/user.png';

const AdminNavBar = () => {
    const userImg = <img src={user} alt='user' className='admin-user-img' />
    const notfIco = <i className="far fa-bell fa-2x"></i>;

    return (
        <div>
            <Navbar className='admin-navbar' expand="sm">
                <Container>
                    <Navbar.Brand href="#home">خزينك - لوحة التحكم</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            <NavDropdown title={notfIco} id="basic-nav-dropdown" className='admin-notif-drop-menu mx-2'>
                                <NavDropdown.Item className='text-center admin-notif-drop-item'>
                                    <h6>لديك 2 من الإشعارات</h6>
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='mb-0' />
                                <NavDropdown.Item href="#" className='admin-notif-nav-drop'>
                                    <div className="media new">
                                        <div className="main-img-user online">
                                            <img alt="avatar" src={user} />
                                        </div>
                                        <div className="media-body">
                                            <p>
                                                <strong>أحمد حسن</strong>&nbsp;
                                                أضاف منتج جديد
                                            </p>
                                            <span>Oct 15 12:32pm</span>
                                        </div>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='m-0' />
                                <NavDropdown.Item href="#" className='admin-notif-nav-drop'>
                                    <div className="media new">
                                        <div className="main-img-user online">
                                            <img alt="avatar" src={user} />
                                        </div>
                                        <div className="media-body">
                                            <p>
                                                <strong>أحمد حسن</strong>&nbsp;
                                                أضاف منتج جديد
                                            </p>
                                            <span>Oct 15 12:32pm</span>
                                        </div>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='m-0' />
                                <NavDropdown.Item href="#" className='admin-notif-nav-drop'>
                                    <div className='media-dropdown-footer'>
                                        <Link to='/notifications'>عرض جميع الإشعارات</Link>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                            <NavDropdown title={userImg} id="basic-nav-dropdown" className='admin-user-drop-menu'>
                                <NavDropdown.Item className='text-center admin-drop-item'>
                                    <h4>أشرف دياب</h4>
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='mb-0' />
                                <NavDropdown.Item href="#" className='admin-nav-drop'>
                                    معلومات الحساب
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='m-0' />
                                <NavDropdown.Item href="#" className='admin-nav-drop'>
                                    تعديل الحساب
                                </NavDropdown.Item>
                                <NavDropdown.Divider className='m-0' />
                                <NavDropdown.Item href="#" className='admin-nav-drop'>
                                    <span>تسجيل الخروج</span>
                                    <i className="fa fa-sign-out mx-1"></i>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AdminNavBar;
