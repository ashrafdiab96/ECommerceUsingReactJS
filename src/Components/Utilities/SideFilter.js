import React from 'react'
import { Row } from 'react-bootstrap';

const SideFilter = () => {
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">الفئة</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">اجهزة منزلية</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">اجهزة منزلية</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">اجهزة منزلية</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">اجهزة منزلية</div>
                    </div>
                </div>
        
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">الماركة</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">ابل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">سامسونج</div>
                    </div>
                </div>
    
                <div className="filter-title my-3">السعر</div>
                <div className="d-flex">
                    <span className="filter-sub my-2">من:</span>
                    <input
                        className="m-2 filter-num-inp"
                        type="number"
                    />
                </div>
                <div className="d-flex">
                    <span className="filter-sub my-2">الي:</span>
                    <input
                        className="m-2 filter-num-inp"
                        type="number"
                    />
                </div>
            </Row>
        </div>
    );
}

export default SideFilter;
