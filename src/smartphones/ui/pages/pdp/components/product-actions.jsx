import PropTypes from 'prop-types';
import { useProductActions } from './use-product-actions';

import './product-actions.css';

export const ProductActions = (props) => {
    const { product } = props;
    const { state, actions } = useProductActions({ product });

    const renderSelector = (label, options, optionType) => (
        <label className="product-actions__selector-label" key={optionType}>
            {label}:
            <select
                data-cy-id={optionType}
                className="product-actions__selector-input"
                value={state.selectedOptions[optionType]}
                onChange={(e) =>
                    actions.handleOptionChange(optionType, e.target.value)
                }
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
        <section
            data-cy-id="product-options__container"
            className="product-options__container"
        >
            <h2 className="product-options__title">Opciones de Producto</h2>

            <div className="product-actions__selector-container">
                {product.details.options &&
                    renderSelector(
                        'Almacenamiento',
                        state.productStorages,
                        'storage'
                    )}

                {product.details.options &&
                    renderSelector('Color', state.productColors, 'color')}
            </div>

            <div className="button-container">
                {product.price && (
                    <span>
                        <h3
                            data-cy-id={`${product.id}-price`}
                            className="price-text"
                        >
                            {product.price} €
                        </h3>
                    </span>
                )}
                <button
                    className="product-actions__add-to-cart-button"
                    onClick={actions.handleAddToCart}
                    disabled={!product.price}
                    data-cy-id="cart-button"
                >
                    {product.price ? 'Añadir al carrito' : 'No disponible'}
                </button>
            </div>
        </section>
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
