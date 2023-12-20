import { useRef } from 'react';

import { STATUS_TYPES } from '../../context/smartphones-provider.jsx';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader.jsx';
import { ProductActions } from './components/product-actions';
import { useProductDetailsPage } from './use-product-details-page.jsx';

import './product-details-page.css';

export const ProductDetailsPage = () => {
    const rootRef = useRef(null);
    const { state } = useProductDetailsPage({ rootRef });

    const renderDetailListItems = () => {
        const detailMappings = {
            cpu: 'CPU',
            ram: 'RAM',
            os: 'Sistema Operativo',
            displayResolution: 'Resolución de Pantalla',
            battery: 'Batería',
            primaryCamera: 'Cámaras',
            dimentions: 'Dimensiones',
            weight: 'Peso',
        };

        return (
            <ul className="product-details__list">
                {Object.entries(detailMappings).map(([key, title]) => {
                    let value = state.smartphone.details[key];

                    if (key === 'primaryCamera' && Array.isArray(value)) {
                        value = value.join(', ');
                    }

                    if (value && value !== '-') {
                        return (
                            <li
                                key={key}
                                className="product-details__list-item"
                            >
                                <span className="detail-key">{title}:</span>{' '}
                                {value}
                            </li>
                        );
                    }
                })}
            </ul>
        );
    };

    return (
        <div ref={rootRef}>
            <Header />
            {state.status === STATUS_TYPES.FETCHING ? (
                <Loader />
            ) : (
                <main className="details-container">
                    {state.smartphone?.details && (
                        <>
                            <div className="image-container">
                                <img
                                    src={state.smartphone.imgUrl}
                                    alt={state.smartphone.model}
                                />
                            </div>

                            <section className="description-container">
                                <h2 className="description-container__product-title">
                                    {`${state.smartphone.brand} ${state.smartphone.model}`}
                                </h2>
                                <h2 className="description-container__product-details">
                                    Detalles del producto
                                </h2>

                                {state.smartphone?.details &&
                                    renderDetailListItems()}
                            </section>

                            <ProductActions product={state.smartphone} />
                        </>
                    )}
                </main>
            )}
        </div>
    );
};
