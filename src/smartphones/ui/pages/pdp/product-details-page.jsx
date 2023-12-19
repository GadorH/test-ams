import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useSmartphonesProvider } from '../../context/smartphones-provider.jsx';
import { Header } from '../../components/header';
import { ProductActions } from './components/product-actions';
import './product-details-page.css';

export const ProductDetailsPage = () => {
    const { productId } = useParams();
    const rootRef = useRef(null);
    const { smartphones, retrieveById } = useSmartphonesProvider();
    const smartphone = useMemo(() => {
        return smartphones.find((smartphone) => smartphone.id === productId);
    }, [productId, smartphones]);

    useEffect(() => {
        const { abort } = retrieveById(productId);

        return () => {
            abort();
        };
    }, [productId, retrieveById]);

    useEffect(() => {
        if (rootRef.current) {
            window.scrollTo({
                top: rootRef.current.getBoundingClientRect().top,
            });
        }
    }, []);

    const renderDetailListItems = (details) => {
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
                    let value = details[key];

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
            <main className="details-container">
                {smartphone?.details && (
                    <>
                        <div className="image-container">
                            <img
                                src={smartphone.imgUrl}
                                alt={smartphone.model}
                            />
                        </div>

                        <section className="description-container">
                            <h2 className="description-container__product-title">
                                {smartphone.brand} {smartphone.model}
                            </h2>
                            <h2 className="description-container__product-details">
                                Detalles del producto
                            </h2>

                            {smartphone?.details &&
                                renderDetailListItems(smartphone.details)}
                        </section>

                        <ProductActions product={smartphone} />
                    </>
                )}
            </main>
        </div>
    );
};
