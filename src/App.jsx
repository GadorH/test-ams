import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ProductListPage } from './product-list/pages/product-list-page';
import { ProductDetailsPage } from './product-details/pages/product-details-page';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<ProductListPage />} />
                <Route
                    path="/products/details/:productId"
                    element={<ProductDetailsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};
