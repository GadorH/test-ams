import { useState } from 'react';
import { getAllProductsService } from '../services/product-services';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const retrieveAll = async () => {
        const products = await getAllProductsService();
        setProducts(products);
    };

    return { retrieveAll, products };
};

export default useProducts;
