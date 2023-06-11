import { useEffect, useState } from 'react';
import notify from '../useNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

export const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPasswors] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeConfirmPasswors = (e) => {
        setConfirmPasswors(e.target.value);
    };

    const validationMethod = () => {
        if (name === '') {
            notify('من فضلك أدخل اسم المستخدم', 'error');
            return;
        }
        if (phone <= 10) {
            notify('من فضلك أدخل رقم هاتف صحيح', 'error');
            return;
        }
        if (password !== confirmPassword) {
            notify('كلمة السر غير متطابقة', 'error');
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            notify('من فضلك أدخل بريد إلكتروني صالح', 'error');
            return;
        }
    };

    const res = useSelector(state => state.authReducer.createUser);

    const onSubmit = async () => {
        // alert('ss');
        validationMethod();
        setLoading(true);
        setIsPress(true);
        await dispatch(createUser({
            name,
            phone,
            email,
            password,
            passConfirm: confirmPassword,
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res?.data?.token) {
                    localStorage.setItem('token', res.data.token);
                    notify('تم تسجيل الحساب بنجاح', 'success');
                    setTimeout(() => navigate('/login'), 1000);
                }
            }
            setLoading(true);
            setTimeout(() => setIsPress(false), 1000);
        }
    }, [loading]);

    return [
        name, phone, email, password, confirmPassword, loading,
        onChangeName, onChangePhone, onChangeEmail, onChangePassword,
        onChangeConfirmPasswors, onSubmit, isPress
    ];
}
