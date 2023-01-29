import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesAction';

export const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    const categories = useSelector(state => state.categories.categoriesData);
    const loading = useSelector(state => state.categories.loading);
    const colors = ['#FFDBE8', '#F4DBA5', '#55CFDF', '#FF6262', '#0034FF', '#FFD3E8'];

    return [categories, loading, colors];
}

export default HomeCategoryHook;
