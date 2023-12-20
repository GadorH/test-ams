import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useToastProvider } from '../../../../shared/ui/context/toast-provider';
import { useSmartphonesProvider } from '../../context/smartphones-provider';

export const useProductDetailsPage = ({ rootRef }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const toast = useToastProvider();
    const { smartphones, status, retrieveById } = useSmartphonesProvider();

    const smartphone = useMemo(() => {
        return smartphones.find((smartphone) => smartphone.id === productId);
    }, [productId, smartphones]);

    useEffect(() => {
        const { abort, service } = retrieveById(productId);
        service.catch(() => {
            toast.error('Error obteniendo los datos');
            navigate('/smartphones');
        });

        return () => {
            abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    useEffect(() => {
        if (rootRef.current) {
            window.scrollTo({
                top: rootRef.current.getBoundingClientRect().top,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        state: {
            smartphone,
            status,
        },

        actions: {},
    };
};
