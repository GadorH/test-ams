import { useEffect, useMemo, useState } from 'react';

import { useSmartphonesProvider } from '../../context/smartphones-provider.jsx';
import { Header } from '../../components/header';
import { ProductList } from './components/product-list';
import './product-list-page.css';

export const ProductListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { smartphones, retrieveAll } = useSmartphonesProvider();
    const smartphonesToShow = useMemo(() => {
        return smartphones.filter((smartphone) => {
            const brand = smartphone.brand.toLowerCase();
            const model = smartphone.model.toLowerCase();
            const searchTermInBrand = brand.includes(searchTerm);
            const searchTermInModel = model.includes(searchTerm);

            return searchTermInBrand || searchTermInModel;
        });
    }, [searchTerm, smartphones]);

    useEffect(() => {
        const { abort } = retrieveAll();

        return () => {
            abort();
        };
    }, [retrieveAll]);

    const handleSearch = (event) => {
        const { value } = event.target;
        const searchTerm = value.toLowerCase();

        setSearchTerm(searchTerm);
    };

    return (
        <>
            <Header />
            <main>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>

                <ProductList products={smartphonesToShow} />
            </main>
        </>
    );
};
