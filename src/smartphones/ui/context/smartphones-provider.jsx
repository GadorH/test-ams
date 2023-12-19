import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import * as smartphonesServices from '../../services/smartphones-services';

const SmartphonesContext = createContext();
SmartphonesContext.displayName = 'SmartphonesContext';

// eslint-disable-next-line react-refresh/only-export-components
export const STATUS_TYPES = {
    READY: 'READY',
    FETCHING: 'FETCHING',
};

export const SmartphonesProvider = ({ children }) => {
    const [state, setState] = useState({
        smartphones: [],
        updatedAt: null,
        status: STATUS_TYPES.READY,
    });

    const retrieveById = (smartphoneId) => {
        const smartphone = state.smartphones.find(
            ({ id }) => id === smartphoneId
        );

        const oneHourAgo = Date.now() - 3600000;
        if (smartphone?.details && oneHourAgo < smartphone.updatedAt) {
            return { abort: () => {}, service: Promise.resolve() };
        }

        const abortController = new AbortController();
        setState({ ...state, status: STATUS_TYPES.FETCHING });

        const service = smartphonesServices
            .getProductDetailsService(smartphoneId, {
                signal: abortController.signal,
            })
            .then(({ id, brand, model, price, imgUrl, ...details }) => {
                if (!smartphone) {
                    setState({
                        ...state,
                        status: STATUS_TYPES.READY,
                        smartphones: [
                            ...state.smartphones,
                            {
                                id,
                                brand,
                                model,
                                price,
                                imgUrl,
                                details,
                                updatedAt: Date.now(),
                            },
                        ],
                    });
                } else {
                    setState({
                        ...state,
                        status: STATUS_TYPES.READY,
                        smartphones: state.smartphones.map((smartphone) => {
                            if (smartphone.id === id) {
                                return {
                                    ...smartphone,
                                    updatedAt: Date.now(),
                                    brand,
                                    model,
                                    price,
                                    imgUrl,
                                    details,
                                };
                            }

                            return smartphone;
                        }),
                    });
                }
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    return;
                }

                throw error;
            });

        return { abort: () => abortController.abort(), service };
    };

    const retrieveAll = () => {
        const oneHourAgo = Date.now() - 3600000;

        if (state.updatedAt != null && oneHourAgo < state.updatedAt) {
            return { abort: () => {}, service: Promise.resolve() };
        }

        const abortController = new AbortController();
        setState({ ...state, status: STATUS_TYPES.FETCHING });

        const service = smartphonesServices
            .getAllProductsService({ signal: abortController.signal })
            .then((products) => {
                setState({
                    ...state,
                    status: STATUS_TYPES.READY,
                    updatedAt: Date.now(),
                    smartphones: products.map(
                        ({ id, brand, model, price, imgUrl }) => {
                            const smartphone = state.smartphones.find(
                                (smartphone) => smartphone.id === id
                            );

                            return {
                                id,
                                brand,
                                model,
                                price,
                                imgUrl,
                                updatedAt: Date.now(),
                                details: smartphone?.details || null,
                            };
                        }
                    ),
                });
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    return;
                }

                throw error;
            });

        return { abort: () => abortController.abort(), service };
    };

    const contextValue = useMemo(() => {
        return {
            smartphones: state.smartphones,
            status: state.status,

            retrieveById: retrieveById,
            retrieveAll: retrieveAll,
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.smartphones, state.status]);

    return (
        <SmartphonesContext.Provider value={contextValue}>
            {children}
        </SmartphonesContext.Provider>
    );
};

SmartphonesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSmartphonesProvider = () => {
    const context = useContext(SmartphonesContext);

    if (!context) {
        throw new Error(
            'useSmartphonesProvider must be used within a SmartphonesProvider'
        );
    }

    return context;
};
