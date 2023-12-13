import PropTypes from 'prop-types';

export const ProductList = (props) => {
    const { products } = props;

    return (
        <>
            <h1>Lista de Productos</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <img
                        src={product.imgUrl}
                        alt={`Imagen de ${product.model}`}
                    ></img>
                    <p>Marca: {product.brand}</p>
                    <p>Modelo: {product.model}</p>
                    <p>Precio: {product.price}</p>
                </div>
            ))}
        </>
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
