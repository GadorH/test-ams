import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './product-list.css';

export const ProductList = (props) => {
    const { products } = props;

    return (
        <ul className="item-list">
            {products.map((product) => (
                <li key={product.id} className="item-card">
                    <Link
                        to={`${product.id}`}
                        data-cy-id={product.id}
                        className="item-link"
                    >
                        <img
                            loading="lazy"
                            src={product.imgUrl}
                            alt={`Imagen de ${product.model}`}
                            data-cy-id={`${product.id}-img`}
                        />
                        <p data-cy-id={`${product.id}-brand`}>
                            {product.brand}
                        </p>
                        <p data-cy-id={`${product.id}-model`}>
                            {product.model}
                        </p>
                        <p
                            data-cy-id={`${product.id}-price`}
                            className="item-price"
                        >
                            {product?.price
                                ? `${product.price} €`
                                : 'No Disponible'}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            brand: PropTypes.string,
            model: PropTypes.string,
            price: PropTypes.string,
            imgUrl: PropTypes.string,
        })
    ),
};
