import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesAction';
import { getBrands } from '../../redux/actions/brandsAction';
import { getSubcategoriesByCatId } from '../../redux/actions/subcategoryAction';
import { getProduct, updateProduct } from '../../redux/actions/productsAction';
import notify from '../useNotifications';
import { useNavigate } from 'react-router-dom';

const EditProductAdminHook = (id) => {
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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const run = async () => {
            await dispatch(getProduct(id));
            await dispatch(getCategories());
            await dispatch(getBrands());
        };
        run();
    }, []);

    const product = useSelector(state => state.products.getProductData);
    const categories = useSelector(state => state.categories.categoriesData);
    const brands = useSelector(state => state.brands.brandsData);
    const subCats = useSelector(state => state.subcategories.subcategoriesData);

    useEffect(() => {
        if (product?.data) {
            setProdName(product.data.title);
            setImages(product.data.images);
            setProdDesc(product.data.description);
            setPriceBefore(product.data.price);
            setPriceAfter(product.data.priceAfterDiscount);
            setQty(product.data.quantity);
            setCatId(product.data.category._id);
            setBrandId(product.data.brand._id);
            setColors(product.data.colors);
        }
    }, [product]);

    const getSubCategoriesOnEdit = async (catId) => {
        await dispatch(getSubcategoriesByCatId(catId));
    };

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
        setCatId(e.target.value);
    }

    useEffect(() => {
        if (catId !== 0) {
            getSubCategoriesOnEdit(catId);   
        }
    }, [catId]);

    useEffect(() => {
        if (subCats.data) {
            setOptions(subCats.data);
        } else {
            setOptions([]);
        }
    }, [subCats]);
    
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

    // convert image from url to file
    const convertURLToFile = async (url) => {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.blob();
        const ext = url.split('.').pop();
        const fileName = url.split('/').pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
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

        let imgCover;
        if (images[0].length <= 1000) {
            // convert main product image from url to file
            convertURLToFile(images[0]).then(val => imgCover = val);
        } else {
            console.log('base 64')
            // convert main product image from base64 to file
            imgCover = dataURLToFile(images[0], Math.ceil(Math.random() * 10000) + '.png');
        }
        // console.log(imgCover);
        
        let productImgs = [];
        // convert array of product images from base64 to file
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLToFile(images[index]).then(val => {
                        productImgs.push(val);
                    });
                } else {
                    productImgs.push(
                        dataURLToFile(
                            images[index], Math.ceil(Math.random() * 10000) + '.png'
                        )
                    );
                }
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
        selectedSubCat.map(subCat => formData.append('subcategories', subCat._id));
        colors.map(color => formData.append('colors', color));
        // console.log(imgCover);
        setTimeout(() => {
            // console.log(imgCover);
            formData.append('imageCover', imgCover);
            productImgs.map(img => formData.append('images', img));
        }, 1000);
        // console.log(imgCover);
        setTimeout(async () => {
            setLoading(true);
            setIsPress(true);
            await dispatch(updateProduct(product.data._id, formData));
            setLoading(false);
            navigate('/admin/products');
        }, 1000);
    };

    const updatedProduct = useSelector(state => state.products.updateProductData);

    useEffect(() => {
        if(loading === false) {
            setTimeout(() => setIsPress(false), 1000);
            if (updatedProduct) {
                if (updatedProduct.status === 200) {
                    notify('تمت عملية التعديل بنجاح', 'success');
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
                notify('فشلت عملية التعديل', 'error');
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
        onSelectedBrand, brands, removeColor, handleColorChange, handleSubmit,
        catId
    ];

}

export default EditProductAdminHook;
