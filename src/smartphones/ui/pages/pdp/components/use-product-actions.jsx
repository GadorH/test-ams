import { useState } from 'react';

import { useToastProvider } from '../../../../../shared/ui/context/toast-provider.jsx';
import { useCartProvider } from '../../../context/cart-provider';

export const useProductActions = ({ product }) => {
    const { add } = useCartProvider();
    const toast = useToastProvider();

    const productStorages = product.details.options.storages;
    const productColors = product.details.options.colors;

    const [selectedOptions, setSelectedOptions] = useState({
        storage: productStorages[0].code,
        color: productColors[0].code,
    });

    const handleOptionChange = (optionType, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [optionType]: value,
        }));
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            colorCode: selectedOptions.color,
            storageCode: selectedOptions.storage,
        };

        add(cartItem).catch(() => {
            toast.error('Error añadiendo al carrito');
        });
    };

    return {
        state: {
            selectedOptions,
            productColors,
            productStorages,
        },
        actions: {
            handleOptionChange,
            handleAddToCart,
        },
    };
};
