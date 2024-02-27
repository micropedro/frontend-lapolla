import { toast,ToastContainer } from 'react-toastify';
const useNotify = () => {

    const notify = {
        success:(text) => toast.success(text || ''),
        error:(text) => toast.error(text || ''),
        warn:(text) => toast.warn(text || ''),
        info:(text) => toast.info(text || ''),
    }

    return {
        notify,
        ToastContainer
    }
}
export default useNotify
