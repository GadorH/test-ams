import { createContext, useContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { addProductToCartService } from '../../services/smartphones-services';

const CartContext = createContext();
CartContext.displayName = 'CartContext';

const initialState = {
    products: [],
};

const ACTION_TYPES = {
    ADD: 'ADD',
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.ADD:
            return {
                ...state,
                products: [...state.products, payload.product],
            };
        default:
            throw new Error(
                `CartProvider::reducer: action with type ${type} not implemented yet`
            );
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const add = (product) => {
        return addProductToCartService(product).then(() => {
            dispatch({
                type: ACTION_TYPES.ADD,
                payload: { product },
            });
        });
    };

    const contextValue = useMemo(() => {
        return {
            cart: state.products,

            add: add,
        };
    }, [state]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartProvider = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartProvider must be used within a CartProvider');
    }

    return context;
};
