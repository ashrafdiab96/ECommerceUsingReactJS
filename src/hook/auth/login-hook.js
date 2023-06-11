import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifications';
import { loginUser } from '../../redux/actions/authAction';

export const LoginHook = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const validationMethod = () => {
        if (email === '') {
            notify('من فضلك أدخل البريد الإلكتروني', 'error');
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            notify('من فضلك أدخل بريد إلكتروني صالح', 'error');
            return;
        }
        if (password === '') {
            notify('من فضلك أدخل الرقم السري', 'error');
            return;
        }
    };

    const res = useSelector(state => state.authReducer.loginUser);

    const onSubmit = async () => {
        validationMethod();
        setLoading(true);
        setIsPress(true);
        await dispatch(loginUser({
            email,
            password
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res?.data?.token) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    navigator('/');
                } else {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }
            }
            setLoading(true);
            setTimeout(() => setIsPress(false), 1000);
        }

    }, [loading]);

    return [
        email, password, loading, isPress,
        onChangeEmail, onChangePassword, onSubmit
    ];

}
