import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../redux/actions/brandsAction';

const BrandsFeatureHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
    }, []);
    const brands = useSelector(state => state.brands.brandsData);
    const loading = useSelector(state => state.brands.loading);

    return [brands, loading];
}

export default BrandsFeatureHook;
