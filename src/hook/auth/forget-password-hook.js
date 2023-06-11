import { useEffect, useState } from 'react';
import notify from '../useNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/authAction';

export const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const validationMethod = () => {
        if (email === '') {
            notify('من فضلك أدخل البريد الإلكتروني', 'error');
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            notify('من فضلك أدخل بريد إلكتروني صالح', 'error');
            return;
        }
    };

    const res = useSelector(state => state.authReducer.forgetPassword);
    const onSubmit = async () => {
        validationMethod();
        setLoading(true);
        setIsPress(true);
        await dispatch(forgetPassword({
            email
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
            }
            setLoading(true);
            setTimeout(() => setIsPress(false), 1000);
        }
    }, [loading]);

    return [email, loading, isPress, onChangeEmail, onSubmit];

}
