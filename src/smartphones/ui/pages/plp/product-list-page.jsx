import { STATUS_TYPES } from '../../context/smartphones-provider.jsx';
import { Header } from '../../components/header';
import LoadingGif from '../../assets/loading.gif';
import NotFoundImage from '../../assets/no-product.png';
import { ProductList } from './components/product-list';
import { useProductListPage } from './use-product-list-page.jsx';

import './product-list-page.css';

export const ProductListPage = () => {
    const { state, actions } = useProductListPage();

    return (
        <>
            <Header />
            <main>
                {state.status === STATUS_TYPES.FETCHING ? (
                    <div className="loader">
                        <img
                            className="loader__image"
                            src={LoadingGif}
                            role="presentation"
                        />
                        <p>Estamos obteniendo los patos, digo los datos...</p>
                    </div>
                ) : (
                    <>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Buscar"
                                value={state.searchTerm}
                                onChange={actions.handleSearch}
                                className="search-input"
                            />
                        </div>

                        {state.smartphonesToShow.length === 0 ? (
                            <div className="not-found-image-container">
                                <img
                                    className="not-found-image"
                                    src={NotFoundImage}
                                    alt="producto no encontrado"
                                />
                            </div>
                        ) : (
                            <ProductList products={state.smartphonesToShow} />
                        )}
                    </>
                )}
            </main>
        </>
    );
};
