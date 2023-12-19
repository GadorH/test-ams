const baseURL = import.meta.env.VITE_API_URL;

export const getAllProductsService = async ({ signal = null }) => {
    const res = await fetch(`${baseURL}/product`, { signal });
    const body = await res.json();

    if (res.status !== 200) {
        throw new Error(body.message);
    }

    return body;
};

export const getProductDetailsService = async (
    productId,
    { signal = null }
) => {
    const res = await fetch(`${baseURL}/product/${productId}`, { signal });
    const body = await res.json();

    if (res.status !== 200) {
        throw new Error(body.message);
    }

    return body;
};

export const addProductToCartService = async (product) => {
    const res = await fetch(`${baseURL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    const body = await res.json();

    if (res.status !== 200) {
        throw new Error(body.message);
    }

    return body;
};
