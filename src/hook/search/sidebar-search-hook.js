import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesAction';
import { getBrands } from '../../redux/actions/brandsAction';
import GetSearchProductsHook from '../products/get-search-products-hook';

export const SidebarSearchHook = () => {
    const dispatch = useDispatch();
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');
    const [items, pagination, onPress, getProducts, results] = GetSearchProductsHook();

    // get categories on first load
    useEffect(() => {
        const run = async () => {
            await dispatch(getCategories());
            await dispatch(getBrands());
        };
        run();
    }, []);

    useEffect(() => {
        let queryCategories = checkedCategories.map(cat => `category=${cat}`).join('&');
        localStorage.setItem('checkedCategories', queryCategories);
        // setTimeout(() => {
            getProducts();
        // }, 1000);
    }, [checkedCategories]);

    useEffect(() => {
        let queryBrands = checkedBrands.map(brand => `brand=${brand}`).join('&');
        localStorage.setItem('checkedBrands', queryBrands);
        // setTimeout(() => {
            getProducts();
        // }, 1000);
    }, [checkedBrands]);

    useEffect(() => {
        setTimeout(() => {
            getProducts('');
        }, 1000);
    }, [fromPrice, toPrice]);
    
    // get state from redux
    const categoriesData = useSelector(state => state.categories.categoriesData);
    const brandsData = useSelector(state => state.brands.brandsData);

    let categories = [];
    let brands = [];
    try {
        categories = categoriesData.data ? categoriesData.data : [];
        brands = brandsData.data ? brandsData.data : [];
    } catch (error) {
        return error.data;
    }

    /**
     * @method searhByCategory()
     * @desc get checked categories by user to search product with them
     * @param {object} event
     * @returns {void}
     */
    const searhByCategory = (event) => {
        let value = event.target.value;
        let checked = event.target.checked;
        if (value === 0) {
            setCheckedCategories([]);
        } else {
            if (checked) {
                setCheckedCategories([...checkedCategories, value]);
            } else {
                const newCats = checkedCategories.filter(e => e !== value);
                setCheckedCategories(newCats);
            }
        }
    }

    /**
     * @method searhByBrand()
     * @desc get checked brands by user to search product with them
     * @param {object} event
     * @returns {void}
     */
    const searhByBrand = (event) => {
        let value = event.target.value;
        let checked = event.target.checked;
        if (value === 0) {
            setCheckedBrands([]);
        } else {
            if (checked) {
                setCheckedBrands([...checkedBrands, value]);
            } else {
                const newBrands = checkedBrands.filter(e => e !== value);
                setCheckedBrands(newBrands);
            }
        }
    }

    /**
     * @method priceFrom()
     * @desc get price from value and store it in local storage
     * @param {object} event
     * @returns {void}
     */
    const priceFrom = (event) => {
        localStorage.setItem('priceFrom', event.target.value);
        setFromPrice(event.target.value);
    };
    
    /**
     * @method priceTo()
     * @desc get price to value and store it in local storage
     * @param {object} event
     * @returns {void}
     */
    const priceTo = (event) => {
        localStorage.setItem('priceTo', event.target.value);
        setToPrice(event.target.value);
    };

    return [
        categories, brands, searhByCategory, searhByBrand, priceFrom, priceTo
    ];
}

export default SidebarSearchHook;
