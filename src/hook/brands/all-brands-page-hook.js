import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands, getBrandsPage } from '../../redux/actions/brandsAction';

export const AllBrandsPageHook = () => {
    const dispatch = useDispatch();
    const limit = 8;
    // get all brands on first load
    useEffect(() => {
        dispatch(getBrands(limit));
    }, []);
    
    // get state from redux
    const allData = useSelector(state => state.brands);
    const brands = allData.brandsData;
    const loading = allData.loading;

    // get page count
    let pageCount = 0;
    if (brands.paginationResult) {
        pageCount = brands.paginationResult.numberOfPages;
    }

    const getPage = (page) => {
        dispatch(getBrandsPage(limit, page));
    };

    return [brands, loading, pageCount, getPage];
}

export default AllBrandsPageHook;
