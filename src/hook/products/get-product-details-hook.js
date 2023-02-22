import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getSimilarProducts } from '../../redux/actions/productsAction';

const GetProductDetailsHook = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(id));
    }, []);

    const product = useSelector(state => state.products.getProductData);
    const similarProducts = useSelector(state => state.products.similarProductsData);

    let item = [];
    if (product.data) {
        item = product.data;
    } else {
        item = [];
    }

    useEffect(() => {
        if (item.category?._id) {
            dispatch(getSimilarProducts(item.category._id));
        }
    }, [item]);

    let similarProds = [];
    if (similarProducts?.data) {
        similarProds = similarProducts?.data.slice(0, 4);
    } else {
        similarProds = [];
    }

    return [item, similarProds];
}

export default GetProductDetailsHook;
