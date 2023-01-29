import React from 'react';
import { Link, useLocation, useParams  } from 'react-router-dom';

const AdminSideBar = () => {
        const location = useLocation();
        const { pathname } = location;
        const { id } = useParams();

    return (
        <div className="admin-sidebar">
            <div className="d-flex flex-column">
                <div>
                    <p className='admin-layout-title'>
                        <span>لوحة التحكم</span>
                        <div className='MuiDivider-root MuiDivider-fullWidth MuiDivider-light rtl-1ufgr6a'></div>
                    </p>
                </div>
                <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto 
                            ${pathname === '/admin/dashboard' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fa fa-chart-line mx-3"></i>
                        الداشبورد
                    </div>
                </Link>
                <Link to="/admin/orders" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/orders' || pathname === `/admin/orders/${id}` ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-shopping-basket mx-3"></i>
                        اداره الطلبات
                    </div>
                </Link>
                <Link to="/admin/products" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/products' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-box-open mx-3"></i>
                        اداره المنتجات
                    </div>
                </Link>
                <Link to="/admin/addBrand" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/addBrand' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-band-aid mx-3"></i>
                        اضف ماركه
                    </div>
                </Link>

                <Link to="/admin/addCategory" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/addCategory' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-tags mx-3"></i>
                        اضف تصنيف
                    </div>
                </Link>

                <Link to="/admin/addSubcategory" style={{ textDecoration: 'none' }}>
                    <div 
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/addSubcategory' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-tag mx-3"></i>
                        اضف تصنيف فرعي
                    </div>
                </Link>
                <Link to="/admin/addProduct" style={{ textDecoration: 'none' }}>
                    <div
                        className={
                            `admin-side-link my-1 mx-auto
                            ${pathname === '/admin/addProduct' ? " admin-side-link-active" : ''}`
                        }
                    >
                        <i className="fas fa-box mx-3"></i>
                        اضف منتج
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AdminSideBar;
