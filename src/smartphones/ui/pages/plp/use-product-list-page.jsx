import { useEffect, useMemo, useState } from 'react';

import { useToastProvider } from '../../../../shared/ui/context/toast-provider';
import { useSmartphonesProvider } from '../../context/smartphones-provider';

export const useProductListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { smartphones, status, retrieveAll } = useSmartphonesProvider();
    const toast = useToastProvider();
    const smartphonesToShow = useMemo(() => {
        return smartphones.filter((smartphone) => {
            const brand = smartphone.brand.toLowerCase();
            const model = smartphone.model.toLowerCase();
            const searchTermInBrand = brand.includes(searchTerm);
            const searchTermInModel = model.includes(searchTerm);

            return searchTermInBrand || searchTermInModel;
        });
    }, [searchTerm, smartphones]);

    useEffect(() => {
        const { abort, service } = retrieveAll();

        service.catch(() => {
            toast.error('Error obteniendo los datos');
        });

        return () => {
            abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (event) => {
        const { value } = event.target;
        const searchTerm = value.toLowerCase();

        setSearchTerm(searchTerm);
    };

    return {
        state: {
            status,
            smartphonesToShow,
            searchTerm,
        },

        actions: {
            handleSearch,
        },
    };
};
