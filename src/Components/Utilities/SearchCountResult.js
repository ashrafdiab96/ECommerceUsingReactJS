import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sort from '../../assets/images/sort.png';

const SearchCountResult = ({ title, onClick }) => {
    const handler = () => {};

    const sortProducts = (sortType) => {
        localStorage.setItem('sortType', sortType);
        onClick();
    };
    
    return (
        <div className='d-flex justify-content-between pt-3 px-2'>
            <div className='sub-tile'>{title}</div>
            <div className='search-count-text d-flex'>
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <span className='mx-1'>
                            <img
                                width='20px'
                                height='20px'
                                className='ms-1'
                                src={sort}
                                alt='order by'
                            />
                            ترتيب حسب
                        </span>
                    }
                    delay={0}
                    align="CENTER"
                    hover
                >
                <div className='card-filter'>
                    <div
                        className='card-filter-item border-bottom'
                        onClick={() => sortProducts('without sorting')}    
                    >بدون ترتيب</div>
                    <div
                        className='card-filter-item border-bottom'
                        onClick={() => sortProducts('most seller')}
                    >الأكثر مبيعا</div>
                    <div
                        className='card-filter-item border-bottom'
                        onClick={() => sortProducts('most rating')}
                    >الأعلى تقييما</div>
                    <div
                        className='card-filter-item border-bottom'
                        onClick={() => sortProducts('low to high price')}
                    >السعر من الأقل للأعلى</div>
                    <div
                        className='card-filter-item'
                        onClick={() => sortProducts('high to low price')}
                    >السعر من الأعلى للأقل</div>
                </div>
                </UnopDropdown>
            </div>
        </div>
    );
}

export default SearchCountResult;
