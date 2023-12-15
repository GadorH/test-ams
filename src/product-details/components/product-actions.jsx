import { useState } from 'react';

export const ProductActions = (props) => {
    const { productDetails } = props;

    const productStorages = productDetails.options.storages;
    const productColors = productDetails.options.colors;

    const [selectedOptions, setSelectedOptions] = useState({
        storage: 'defaultStorageOption',
        color: 'defaultColorOption',
    });

    const handleOptionChange = (optionType, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [optionType]: value,
        }));
    };

    const renderSelector = (label, options, optionType) => (
        <label key={optionType}>
            {label}:
            <select
                value={selectedOptions[optionType]}
                onChange={(e) => handleOptionChange(optionType, e.target.value)}
            >
                <option value={`default${optionType}Option`} disabled>
                    Selecciona {label}
                </option>
                {options.map((option) => (
                    <option key={option.code} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </label>
    );

    const productNotAvailable = !productDetails.price;

    return (
        <div>
            <h2>Opciones de Producto</h2>

            {productDetails.options &&
                renderSelector('Almacenamiento', productStorages, 'storage')}

            {productDetails.options &&
                renderSelector('Color', productColors, 'color')}

            <button disabled={productNotAvailable}> Añadir a la Cesta</button>
        </div>
    );
};
