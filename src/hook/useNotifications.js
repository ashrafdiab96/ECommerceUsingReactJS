import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle notification
const notify = (message, type) => {
    if (type === 'error') {
        toast.error(message);
    } else if (type === 'warning') {
        toast.warning(message)
    } else if (type === 'success') {
        toast.success(message);
    }
};

export default notify;
