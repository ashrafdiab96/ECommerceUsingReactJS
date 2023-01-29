import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../redux/actions/categoriesAction';
import avatar from '../../assets/images/avatar.png';
import notify from '../../hook/useNotifications';

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const res = useSelector(state => state.categories.categoriesData);
    
    // set name
    const onChangeName = (event) => {
        setName(event.target.value);
    };

    // set image
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0]);
        }
    };

    // save data in database
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === '' || selectedFile === null) {
            notify('من فضلك أكمل البيانات', 'warning');
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', selectedFile);
        setLoading(true);
        setIsPress(true);
        await dispatch(createCategory(formData));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            setImg(avatar);
            setName('');
            setLoading(true);
            setTimeout(() => setIsPress(false), 1000);
            if (res.status === 201) {
                notify('تمت عملية الإضافة بنجاح', 'success');
            } else {
                notify('فشلت عمليىة الإضافة', 'error');
            }
        }
    }, [loading]);

    return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName];
}

export default AddCategoryHook;
