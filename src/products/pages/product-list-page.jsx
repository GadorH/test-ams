import { useState, useEffect } from "react";
import { ProductList } from "../components/product-list";
import { getAllProductsService } from "../services/product-services";

export const ProductListPage = () => {
    const [products, setProducts] = useState([]);

    const retrieveAll = async () => {
        const products = await getAllProductsService();
        setProducts(products);
    };

    useEffect(() => {
        retrieveAll();
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
};
