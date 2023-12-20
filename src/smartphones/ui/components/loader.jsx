import LoadingGif from './assets/loading.gif';

import './loader.css';

export const Loader = () => {
    return (
        <div className="loader">
            <img
                className="loader__image"
                src={LoadingGif}
                role="presentation"
            />
            <p>Estamos obteniendo los patos, digo los datos...</p>
        </div>
    );
};
