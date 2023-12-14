import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { ProductList } from '../components/product-list';
import '../../index.css';

export const ProductListPage = () => {
    const { retrieveAll, products } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        retrieveAll();
    }, []);

    useEffect(() => {
        const filtered = products.filter(
            (product) =>
                product.brand
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                product.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
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
            <ProductList products={searchTerm ? filteredProducts : products} />
        </>
    );
};
