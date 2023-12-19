import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { CartProvider } from './smartphones/ui/context/cart-provider';
import { ProductListPage } from './smartphones/ui/pages/plp/product-list-page';
import { ProductDetailsPage } from './smartphones/ui/pages/pdp/product-details-page';
import { SmartphonesProvider } from './smartphones/ui/context/smartphones-provider.jsx';

export const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <SmartphonesProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/smartphones" replace />}
                        />
                        <Route path="/smartphones" element={<ProductListPage />} />
                        <Route
                            path="/smartphones/:productId"
                            element={<ProductDetailsPage />}
                        />
                    </Routes>
                </SmartphonesProvider>
            </BrowserRouter>
        </CartProvider>
    );
};
