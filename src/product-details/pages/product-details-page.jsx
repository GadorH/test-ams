import React, { useEffect } from 'react';
import '../../index.css';

import useProducts from '../../product-list/hooks/useProducts';
import { ProductActions } from '../components/product-actions';

export const ProductDetailsPage = () => {
    const { productDetails, productId, retrieve } = useProducts();

    useEffect(() => {
        retrieve(productId);
    }, [productId]);

    return (
        <div className="details-container">
            {productDetails && (
                <>
                    <div className="image-container">
                        <img
                            src={productDetails.imgUrl}
                            alt={`Imagen de ${productDetails.model}`}
                        />
                    </div>

                    <div className="description-container">
                        {productDetails.brand && (
                            <h2>
                                {productDetails.brand} {productDetails.model}
                            </h2>
                        )}
                        {productDetails.price ? (
                            <h3>{productDetails.price} €</h3>
                        ) : (
                            <h3>No disponible</h3>
                        )}

                        {productDetails.cpu && <p>CPU: {productDetails.cpu}</p>}
                        {productDetails.ram && <p>RAM: {productDetails.ram}</p>}
                        {productDetails.os && (
                            <p>Sistema Operativo: {productDetails.os}</p>
                        )}
                        {productDetails.displayResolution && (
                            <p>
                                Resolución de Pantalla:{' '}
                                {productDetails.displayResolution}
                            </p>
                        )}
                        {productDetails.battery && (
                            <p>Batería: {productDetails.battery}</p>
                        )}
                        {productDetails.primaryCamera && (
                            <p>
                                Cámaras:{' '}
                                {Array.isArray(productDetails.primaryCamera)
                                    ? productDetails.primaryCamera.join(', ')
                                    : productDetails.primaryCamera}
                            </p>
                        )}
                        {productDetails.dimentions &&
                            productDetails.dimentions !== '-' && (
                                <p>Dimensiones: {productDetails.dimentions}</p>
                            )}

                        {productDetails.weight && (
                            <p>Peso: {productDetails.weight}</p>
                        )}
                    </div>

                    <div className="actions-container">
                        <ProductActions productDetails={productDetails} />
                    </div>
                </>
            )}
        </div>
    );
};
