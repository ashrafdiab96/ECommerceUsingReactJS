import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import CategoriesPage from "./Pages/Category/CategoriesPage";
import BrandsPage from "./Pages/Brand/BrandsPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from './Pages/Cart/CartPage';
import ChooesePaymentPage from "./Pages/Checkout/ChooesePaymentPage";
import AdminProductsPAge from "./Pages/Admin/Products/AdminProductsPAge";
import AdminDashboardPage from "./Pages/Admin/Dashboard/AdminDashboardPage";
import AdminOrdersPage from "./Pages/Admin/Orders/AdminOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/Orders/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/Brands/AdminAddBrandPage ";
import AdminAddCategoryPage from "./Pages/Admin/Category/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/SubCategory/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/Products/AdminAddProductPage";
import UserProfilePage from "./Pages/User/Profile/UserProfilePage";
import UserOrdersPage from "./Pages/User/Orders/UserOrdersPage";
import UserOrderPage from "./Pages/User/Orders/UserOrderPage";
import UserWishlistPage from "./Pages/User/WishLists/UserWishlistPage";
import UserAddressPage from "./Pages/User/Addresses/UserAddressPage";
import UserAddAddressPage from "./Pages/User/Addresses/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/Addresses/UserEditAddressPage";
import UserEditProfilePage from "./Pages/User/Profile/UserEditProfilePage";
import AdminEditProductPage from "./Pages/Admin/Products/AdminEditProductPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";

const App = () => {
    return (
        <div className='font'>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/products" element={<ShopProductPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order/paymethoud" element={<ChooesePaymentPage />} />
                <Route path="/user/profile" element={<UserProfilePage />} />
                <Route path="/user/orders" element={<UserOrdersPage />} />
                <Route path="/user/orders/:id" element={<UserOrderPage />} />
                <Route path="/user/wishlist" element={<UserWishlistPage />} />
                <Route path="/user/addresses" element={<UserAddressPage />} />
                <Route path="/user/addresses/add" element={<UserAddAddressPage />} />
                <Route path="/user/addresses/:id/edit" element={<UserEditAddressPage />} />
                <Route path="/user/editProfile" element={<UserEditProfilePage />} />
                <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                <Route path="/admin/products" element={<AdminProductsPAge />} />
                <Route path="/admin/orders" element={<AdminOrdersPage />} />
                <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
                <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
                <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
                <Route path="/admin/addSubCategory" element={<AdminAddSubCategoryPage />} />
                <Route path="/admin/addProduct" element={<AdminAddProductPage />} />
                <Route path="/admin/editProduct/:id" element={<AdminEditProductPage />} />
            </Routes>
        </div>
    );
}

export default App;
