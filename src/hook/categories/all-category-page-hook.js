import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getCategoriesPage } from '../../redux/actions/categoriesAction';

export const AllCategoryPageHook = () => {
    const dispatch = useDispatch();
    const limit = 6;
    // get data on first load
    useEffect(() => {
        dispatch(getCategories(limit));
    }, []);
    
    // get state from redux
    const allData = useSelector(state => state.categories);
    const categories = allData.categoriesData;
    const loading = allData.loading;
    
    // get page count
    let pageCount = 0;
    if (categories.paginationResult) {
        pageCount = categories.paginationResult.numberOfPages;
    }

    // get data when press pagination
    const getPage = (page) => {
        dispatch(getCategoriesPage(limit, page));
    };

    return [categories, loading, pageCount, getPage];
}

export default AllCategoryPageHook;
