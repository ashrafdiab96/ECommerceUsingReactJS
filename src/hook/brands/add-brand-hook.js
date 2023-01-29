import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand } from '../../redux/actions/brandsAction';
import avatar from '../../assets/images/avatar.png';
import notify from '../useNotifications';

const AddBrandHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const res = useSelector(state => state.brands.brandsData);

    // set name
    const onNameChange = (event) => {
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
        await dispatch(createBrand(formData));
        setLoading(false);
    }

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

    return [img, name, loading, isPress, handleSubmit, onImageChange, onNameChange];
}

export default AddBrandHook;
