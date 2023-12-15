import { useState } from 'react';
import {
    getAllProductsService,
    getProductDetailsService,
} from '../services/product-services';
import { useParams } from 'react-router-dom';

const useProducts = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);

    const retrieveAll = async () => {
        const products = await getAllProductsService();
        setProducts(products);
    };

    const filterProducts = ({ brand, model }) => {
        if (!brand || !model) {
            return products;
        }

        return products.filter(
            (product) =>
                product.brand.toLowerCase().includes(brand) ||
                product.model.toLowerCase().includes(model)
        );
    };

    const retrieve = async () => {
        const productDetails = await getProductDetailsService(productId);
        setProductDetails(productDetails);
    };

    return {
        retrieveAll,
        products,
        productDetails,
        productId,
        filterProducts,
        retrieve,
    };
};

export default useProducts;
