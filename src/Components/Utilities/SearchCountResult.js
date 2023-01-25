import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sort from '../../assets/images/sort.png';

const SearchCountResult = ({ title }) => {
    const handler = () => {};
    
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
                    <div className='card-filter-item border-bottom'>الأكثر مبيعا</div>
                    <div className='card-filter-item border-bottom'>الأعلى تقييما</div>
                    <div className='card-filter-item border-bottom'>السعر من الأقل للأعلى</div>
                    <div className='card-filter-item'>السعر من الأعلى للأقل</div>
                </div>
                </UnopDropdown>
            </div>
        </div>
    );
}

export default SearchCountResult;
