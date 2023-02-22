import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetSearchProductsHook from '../products/get-search-products-hook';

export const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProducts, results] = GetSearchProductsHook();
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate();

    const onSrarchWordChange = (event) => {
        const currentPath = window.location.pathname;
        if (currentPath != '/products') {
            navigate('/products');
        }
        localStorage.setItem('searchWord', event.target.value);
        setSearchWord(event.target.value);
    };

    useEffect(() => {
        setTimeout(() => {
            getProducts();
        }, 1000);
    }, [searchWord]);

    return [searchWord, onSrarchWordChange];
}

export default NavbarSearchHook;
