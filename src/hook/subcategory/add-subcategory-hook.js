import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesAction';
import { createSubcategory } from '../../redux/actions/subcategoryAction';
import notify from '../../hook/useNotifications';

const AddSubcategoryHook = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('0');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const res = useSelector(state => state.subcategories.subcategoriesData);

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    const categories = useSelector(state => state.categories.categoriesData);

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!navigator.onLine) {
            notify("فشل الاتصال بالانترنت", "warning");
            return;
        }

        if (id === '0') {
            notify('من فضلك أختر تصنيف رئيسي', 'warning');
            return;
        }

        if (name === '') {
            notify('من فضلك أدخل اسم التصنيف', 'warning');
            return;
        }
        setLoading(true);
        setIsPress(true);
        await dispatch(createSubcategory({
            name: name,
            category: id,
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            setName('');
            setId('0');
            setTimeout(() => setIsPress(false), 1000);
            if (res.status === 201) {
                notify('تمت عملية الإضافة بنجاح', 'success');
            } else {
                notify('فشلت عملية الإضافة', 'error');
            }
            setLoading(true);
        }
    }, [loading]);

    return [
        id, name, categories, loading, isPress,
        handleIdChange, handleNameChange, handleSubmit
    ];
}

export default AddSubcategoryHook;
