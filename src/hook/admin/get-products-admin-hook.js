import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsPage } from '../../redux/actions/productsAction';

const GetProductsAdminHook = () => {
    const dispatch = useDispatch();
    const limit = 12;

    useEffect(() => {
        dispatch(getProducts(limit));
    }, []);
    const products = useSelector(state => state.products.getProductsData);

    let items = [];
    let pagination = [];
    
    try {
        items = products.data ? products.data : [];
        pagination = products.paginationResult ? products.paginationResult : [];
    } catch (e) {
        return e.data;
    }

    const onPress = async (page) => {
        await dispatch(getProductsPage(limit, page));
    };

    return [items, pagination, onPress];
}

export default GetProductsAdminHook;
