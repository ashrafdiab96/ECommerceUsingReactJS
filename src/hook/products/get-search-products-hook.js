import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSearch } from '../../redux/actions/productsAction';

const GetSearchProductsHook = () => {
    const dispatch = useDispatch();
    const limit = 12;
    let sort = '';
    let word = '';
    let checkedCategories = '';
    let checkedBrands = '';
    let priceFrom = '';
    let priceTo = '';

    /**
     * @method getLocalStorageData()
     * @desc get local storage keys
     * @returns {void}
     */
    const getLocalStorageData = () => {
        word = localStorage.getItem('searchWord') ? localStorage.getItem('searchWord') : '';
        checkedCategories = localStorage.getItem('checkedCategories') ? localStorage.getItem('checkedCategories') : '';
        checkedBrands = localStorage.getItem('checkedBrands') ? localStorage.getItem('checkedBrands') : '';
        priceFrom = localStorage.getItem('priceFrom') ? localStorage.getItem('priceFrom') : '';
        priceTo = localStorage.getItem('priceTo') ? localStorage.getItem('priceTo') : '';
    };

    /**
     * @method getProducts()
     * @desc get products search result after component mount
     * @desc search by -> categories - brands - keywords - price
     * @desc sort products
     * @returns {void}
     */
    const getProducts = async () => {
        getLocalStorageData();
        let priceFromStr = (priceFrom === '' || priceFrom === null || priceFrom <= 0) ? '' : `&price[gte]=${priceFrom}`;
        let priceToStr = (priceTo === '' || priceTo === null || priceTo <= 0) ? '' : `&price[lte]=${priceTo}`; 
        sortProducts();
        await dispatch(
            getProductsSearch(
                `limit=${limit}&keyword=${word}&sort=${sort}&${checkedCategories}&${checkedBrands}${priceFromStr}${priceToStr}`
            )
        );
    };

    useEffect(() => {
        getProducts('');
    }, []);

    const products = useSelector(state => state.products.getProductsData);
    let items = [];
    let pagination = [];
    let results = 0;
    try {
        items = products.data ? products.data : [];
        pagination = products.paginationResult ? products.paginationResult : [];
        results = products.result ? products.result : 0;
    } catch (error) {
        return error.data;
    }

    /**
     * @method onPress()
     * @desc handle pageinaion on search products
     * @desc get products search result after component mount
     * @desc search by -> categories - brands - keywords - price
     * @desc sort products
     * @desc call getProductsSearch() action
     * @returns {void}
     */
    const onPress = async (page) => {
        getLocalStorageData();
        let priceFromStr = (priceFrom === '' || priceFrom === null || priceFrom <= 0) ? '' : `&price[gte]=${priceFrom}`;
        let priceToStr = (priceTo === '' || priceTo === null || priceTo <= 0) ? '' : `&price[lte]=${priceTo}`; 
        sortProducts();
        await dispatch(
            getProductsSearch(
                `limit=${limit}&page=${page}&keyword=${word}&sort=${sort}&${checkedCategories}&${checkedBrands}${priceFromStr}${priceToStr}`
            )
        );
    };

    /**
     * @method sortProducts()
     * @desc handle sort products
     * @returns {void}
     */
    let sortType = '';
    const sortProducts = async () => {
        sortType = localStorage.getItem('sortType') ? localStorage.getItem('sortType') : '';
        switch (sortType) {
            case 'without sorting':
                sort = '';
                break;
            case 'most seller':
                sort = '-sold';
                break;
            case 'most rating':
                sort = 'ratingAverage';
                break;
            case 'low to high price':
                sort = '+price';
                break;
            case 'high to low price':
                sort = '-price';
                break;
            default:
                sort = '';
        }
    };

    return [items, pagination, onPress, getProducts, results];
}

export default GetSearchProductsHook;
