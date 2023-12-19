import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './product-list.css';

export const ProductList = (props) => {
    const { products } = props;

    return (
        <div className="item-container">
            {products.map((product) => (
                <Link to={`${product.id}`} key={product.id}>
                    <div key={product.id} className="item-card">
                        <img
                            loading="lazy"
                            src={product.imgUrl}
                            alt={`Imagen de ${product.model}`}
                        />
                        <p>{product.brand}</p>
                        <p>{product.model}</p>
                        <p className="item-price">
                            {product?.price
                                ? `${product.price} €`
                                : 'No Disponible'}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
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
