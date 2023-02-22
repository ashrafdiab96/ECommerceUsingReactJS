import { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, getProductsPage } from '../../redux/actions/productsAction';

export const DeleteProductAdminHook = (id, currentPage) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleDeleteClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);
    const limit = 12;

    const handleDeleteProduct = async () => {
        setLoading(true);
        await dispatch(deleteProduct(id));
        await dispatch(getProductsPage(limit, currentPage));
        setLoading(false);
        setShow(false);
    };

    return [show, handleDeleteClose, handleDeleteShow, handleDeleteProduct, loading];
}

export default DeleteProductAdminHook;
