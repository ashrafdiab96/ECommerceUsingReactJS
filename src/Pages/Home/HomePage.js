import React from 'react';
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import ProductCardContainer from '../../Components/Product/ProductCardContainer'
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatures from '../../Components/Brand/BrandFeatures';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import UserLayout from '../../Components/Layout/UserLayout';
import GetHomeProductsHook from '../../hook/products/get-home-products-hook';

const HomePage = () => {
    const [items] = GetHomeProductsHook();

    return (
        <UserLayout>
            <div className='font' style={{ minHeight: '870px' }}>
                <CategoryHeader />
                <Slider />
                <HomeCategory />
                <ProductCardContainer
                    products={items}
                    title='الأكثر مبيعا'
                    btnTitle='المزيد'
                    pathText='/products'
                />
                <DiscountSection />
                <ProductCardContainer
                    products={items}
                    title='أحدث الأزياء'
                    btnTitle='المزيد'
                    pathText='/products'
                />
                <BrandFeatures title='أشهر الماركات' btnTitle='المزيد' />
            </div>
        </UserLayout>
    );
}

export default HomePage;
