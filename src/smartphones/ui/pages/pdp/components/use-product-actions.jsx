import { useState } from 'react';
import { useCartProvider } from '../../../context/cart-provider';

export const useProductActions = ({ product }) => {
    const { add } = useCartProvider();

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

        add(cartItem);
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
