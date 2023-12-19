import { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();
ToastContext.displayName = 'ToastContext';

export const ToastProvider = ({ children }) => {
    const error = (message) => {
        toast.error(message, {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const contextValue = useMemo(() => {
        return {
            error,
        };
    }, []);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

ToastProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToastProvider = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToastProvider must be used within a ToastProvider');
    }

    return context;
};
