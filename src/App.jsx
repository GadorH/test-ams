import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';

import { ToastProvider } from './shared/ui/context/toast-provider';
import { CartProvider } from './shared/ui/context/cart-provider.jsx';
import { SmartphonesProvider } from './smartphones/ui/context/smartphones-provider.jsx';
import { ProductListPage } from './smartphones/ui/pages/plp/product-list-page';
import { ProductDetailsPage } from './smartphones/ui/pages/pdp/product-details-page';

export const App = () => {
    return (
        <CartProvider>
            <HashRouter hashType="hashbang">
                <ToastProvider>
                    <SmartphonesProvider>
                        <Routes>
                            <Route
                                path="/smartphones"
                                element={<ProductListPage />}
                            />
                            <Route
                                path="/smartphones/:productId"
                                element={<ProductDetailsPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/smartphones" replace />}
                            />
                        </Routes>
                    </SmartphonesProvider>
                </ToastProvider>
            </HashRouter>
        </CartProvider>
    );
};
