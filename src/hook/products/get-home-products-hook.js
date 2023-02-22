import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction';

const GetHomeProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const products = useSelector(state => state.products.getProductsData);
    let items = [];
    if (products.data) {
        items = products.data.slice(0, 4);
    } else {
        items = [];
    }
    return [items];
}

export default GetHomeProductsHook;
