import React from 'react'
import { Row } from 'react-bootstrap';
import SidebarSearchHook from '../../hook/search/sidebar-search-hook';

const SideFilter = () => {
    const [
        categories, brands, searhByCategory, searhByBrand, priceFrom, priceTo
    ] = SidebarSearchHook();
    let checkedCategories = localStorage.getItem('checkedCategories') ? localStorage.getItem('checkedCategories') : '';
    let checkedBrands = localStorage.getItem('checkedBrands') ? localStorage.getItem('checkedBrands') : '';
    let storedPriceFrom = localStorage.getItem('priceFrom') ? localStorage.getItem('priceFrom') : '';
    let storedPriceTo = localStorage.getItem('priceTo') ? localStorage.getItem('priceTo') : '';

    return (
        <div className="mt-3 px-2">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">الفئة</div>
                    <div className="d-flex mt-3">
                        <input onChange={searhByCategory} type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    {categories ? (
                        categories.map(cat => {
                            return (
                                <div key={cat._id} className="d-flex mt-2">
                                    <input
                                        onChange={searhByCategory}
                                        type="checkbox"
                                        value={cat._id}
                                        checked={checkedCategories.includes(cat._id)}
                                    />
                                    <div className="filter-sub me-2 ">{cat.name}</div>
                                </div>
                            )
                        })
                    ) : null}
                </div>
        
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">الماركة</div>
                    <div className="d-flex mt-3">
                        <input onChange={searhByBrand} type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    {brands ? (
                        brands.map(brand => {
                            return (
                                <div key={brand._id} className="d-flex mt-2">
                                    <input
                                        onChange={searhByBrand}
                                        type="checkbox"
                                        value={brand._id}
                                        checked={checkedBrands.includes(brand._id)}
                                    />
                                    <div className="filter-sub me-2 ">{brand.name}</div>
                                </div>
                            )
                        })
                    ) : null}
                </div>
    
                <div className="filter-title my-3">السعر</div>
                <div className="d-flex">
                    <span className="filter-sub my-2">من:</span>
                    <input
                        value={storedPriceFrom}
                        onChange={priceFrom}
                        className="m-2 filter-num-inp"
                        type="number"
                    />
                </div>
                <div className="d-flex">
                    <span className="filter-sub my-2">الي:</span>
                    <input
                        value={storedPriceTo}
                        onChange={priceTo}
                        className="m-2 filter-num-inp"
                        type="number"
                    />
                </div>
            </Row>
        </div>
    );
}

export default SideFilter;
