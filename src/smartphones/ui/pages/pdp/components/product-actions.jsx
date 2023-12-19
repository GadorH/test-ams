import { useState } from 'react';
import PropTypes from 'prop-types';

import { useCartProvider } from '../../../context/cart-provider';
import './product-actions.css';

export const ProductActions = (props) => {
    const { product } = props;
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

    const renderSelector = (label, options, optionType) => (
        <label className="product-actions__selector-label" key={optionType}>
            {label}:
            <select
                className="product-actions__selector-input"
                value={selectedOptions[optionType]}
                onChange={(e) => handleOptionChange(optionType, e.target.value)}
            >
                <option value={`default${optionType}Option`} disabled>
                    Selecciona {label}
                </option>
                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
        </label>
    );

    return (
        <div>
            <h2 className="product-options__title">Opciones de Producto</h2>

            <div className="product-actions__selector-container">
                {product.details.options &&
                    renderSelector(
                        'Almacenamiento',
                        productStorages,
                        'storage'
                    )}

                {product.details.options &&
                    renderSelector('Color', productColors, 'color')}
            </div>

            <div className="button-container">
                {product.price && (
                    <span>
                        <h3 className="price-text">{product.price} €</h3>
                    </span>
                )}
                <button
                    className="product-actions__add-to-cart-button"
                    onClick={handleAddToCart}
                    disabled={!product.price}
                >
                    {product.price ? 'Añadir al carrito' : 'No disponible'}
                </button>
            </div>
        </div>
    );
};

ProductActions.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        details: PropTypes.shape({
            options: PropTypes.shape({
                storages: PropTypes.arrayOf(
                    PropTypes.shape({
                        code: PropTypes.number,
                        name: PropTypes.string,
                    })
                ),
                colors: PropTypes.arrayOf(
                    PropTypes.shape({
                        code: PropTypes.number,
                        name: PropTypes.string,
                    })
                ),
            }),
        }),
        price: PropTypes.string,
    }),
};
