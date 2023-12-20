import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCartProvider } from '../context/cart-provider';
import { useSmartphonesProvider } from '../context/smartphones-provider';
import CartIcon from './assets/shopping-cart.svg?react';

import './header.css';

export const Header = () => {
    const { productId } = useParams();
    const { cart } = useCartProvider();
    const { smartphones } = useSmartphonesProvider();

    const product = useMemo(() => {
        if (productId) {
            return smartphones.find(
                (smartphone) => smartphone.id === productId
            );
        }

        return null;
    }, [productId, smartphones]);

    return (
        <header className="header">
            <div className="header__row">
                <h2>
                    <Link
                        className="header__row-link"
                        to="/smartphones"
                        aria-current={productId ? null : 'page'}
                    >
                        TEST FRONT-END
                    </Link>
                </h2>
                <div className="header__cart-container">
                    <CartIcon className="header__cart-icon" />

                    <div className="badge">{cart.length}</div>
                </div>
            </div>

            <div className="header__row-breadcrumb">
                <nav
                    aria-label="Breadcrumb"
                    className="header__breadcrumb"
                    data-cy-id="breadcrumb"
                >
                    <ol className="header__row-breadcrumb-list">
                        <li>
                            <Link
                                className="header__row-link"
                                to="/smartphones"
                                aria-current={productId ? null : 'page'}
                            >
                                Smartphones
                            </Link>
                        </li>
                        {productId && (
                            <li>
                                <span className="breadcrumb__arrow">&gt;</span>
                                <Link
                                    className="header__row-link"
                                    to={`/smartphones/${productId}`}
                                    aria-current="page"
                                >
                                    {product?.model}
                                </Link>
                            </li>
                        )}
                    </ol>
                </nav>
            </div>
        </header>
    );
};
