import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { ProductList } from '../components/product-list';
import '../../index.css';

export const ProductListPage = () => {
    const { retrieveAll, filterProducts } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        retrieveAll();
    }, []);

    const handleSearch = (event) => {
        const { value } = event.target;
        const searchTerm = value.toLowerCase().trim();

        setSearchTerm(searchTerm);
    };

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            <ProductList
                products={filterProducts({
                    brand: searchTerm,
                    model: searchTerm,
                })}
            />
        </>
    );
};
