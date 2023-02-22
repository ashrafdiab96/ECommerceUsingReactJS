import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesAction';
import { getBrands } from '../../redux/actions/brandsAction';
import { getSubcategoriesByCatId } from '../../redux/actions/subcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';
import notify from '../../hook/useNotifications';

const AddProductHook = () => {
    const [images, setImages] = useState([]);
    const [prodName, setProdName] = useState('');
    const [prodDesc, setProdDesc] = useState('');
    const [priceBefore, setPriceBefore] = useState('');
    const [priceAfter, setPriceAfter] = useState('');
    const [qty, setQty] = useState('');
    const [catId, setCatId] = useState(0);
    const [brandId, setBrandId] = useState('');
    const [selectedSubCat, setSelectedSubCat] = useState([]);
    const [colors, setColors] = useState([]);
    const [showColor, setShowColor] = useState(false);
    const [options, setOptions] = useState([]);
    const [isPress, setIsPress] = useState(false);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const res = useSelector(state => state.products.createProductsData);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getBrands());
    }, []);

    const categories = useSelector(state => state.categories.categoriesData);
    const brands = useSelector(state => state.brands.brandsData);
    const subCats = useSelector(state => state.subcategories.subcategoriesData);

    // save selected sub categories -> on add
    const onSelectParentCat = (selectedList) => {
        setSelectedSubCat(selectedList);
    }

    // save selected sub categories -> on remove
    const onRemoveParentCat = (selectedList) => {
        setSelectedSubCat(selectedList);
    }

    // save selected category id
    const onSelectCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getSubcategoriesByCatId(e.target.value));
        }
        setCatId(e.target.value);
    }

    useEffect(() => {
        if (catId !== 0) {
            if (subCats.data) {
                setOptions(subCats.data);
            }
        } else {
            setOptions([]);
        }
    }, [catId]);

    // save selected brand id
    const onSelectedBrand = (e) => {
        setBrandId(e.target.value);
    }

    // save selected colors
    const handleColorChange = (color) => {
        setColors([...colors, color.hex]);
        setShowColor(!showColor);
    };

    const onChangeColor = () => {
        setShowColor(!showColor);
    };

    // remove color from colors array
    const removeColor = (color) => {
        const newColors = colors.filter(e => e !== color);
        setColors(newColors);
    };

    // convert image from base 64 to file
    const dataURLToFile = (dataUrl, fileName) => {
        let arr = dataUrl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let uBarr = new Uint8Array(n);
        while (n--) {
            uBarr[n] = bstr.charCodeAt(n);
        }
        return new File([uBarr], fileName, {type: mime});
    };

    // validation
    const validateForm = () => {
        if (
            prodName === '' || prodDesc === '' || qty === '' ||
            priceBefore <= 0 || catId === 0 || images.length <= 0
        ) {
            notify('من فضلك أكمل البيانات', 'warning');
            return;
        }
    };

    // handle submit save new product form
    const handleSubmit = async (event) => {
        event.preventDefault();
        validateForm();
        // convert main product image from base64 to file
        const imgCover = dataURLToFile(images[0], Math.ceil(Math.random() * 10000) + '.png');
        
        // convert array of product images from base64 to file
        const productImgs = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLToFile(images[index], Math.ceil(Math.random() * 10000) + '.png');
            }
        );

        const formData = new FormData();
        formData.append('title', prodName);
        formData.append('description', prodDesc);
        formData.append('price', priceBefore);
        formData.append('priceAfterDiscount', priceAfter);
        formData.append('quantity', qty);
        formData.append('category', catId);
        formData.append('brand', brandId);
        formData.append('imageCover', imgCover);
        selectedSubCat.map(subCat => formData.append('subcategories', subCat._id));
        colors.map(color => formData.append('colors', color));
        productImgs.map(img => formData.append('images', img));
        setLoading(true);
        setIsPress(true);
        await dispatch(createProduct(formData));
        setLoading(false);
        setCatId(0);
    };

    useEffect(() => {
        if(loading === false) {
            setTimeout(() => setIsPress(false), 1000);
            if (res) {
                if (res.status === 201) {
                    notify('تمت عملية الإضافة بنجاح', 'success');
                    setImages([]);
                    setProdName('');
                    setProdDesc('');
                    setPriceBefore('');
                    setPriceAfter('');
                    setQty('');
                    setCatId('');
                    setBrandId(0);
                    setSelectedSubCat([]);
                    setColors([]);
                    setShowColor(false);
                    setOptions([]);
                }
            } else {
                notify('فشلت عملية الإضافة', 'error');
            }
            dispatch(getCategories());
            dispatch(getBrands());
        }
    }, [loading]);

    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    return [
        crop, images, setImages, prodName, setProdName, prodDesc, setProdDesc, 
        priceBefore, setPriceBefore, priceAfter, setPriceAfter, qty, setQty,
        brandId, colors, showColor, onChangeColor, options, isPress, loading,
        categories, onSelectCategory, onSelectParentCat, onRemoveParentCat,
        onSelectedBrand, brands, removeColor, handleColorChange, handleSubmit
    ];

}

export default AddProductHook;
