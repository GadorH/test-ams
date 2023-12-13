const baseURL = import.meta.env.VITE_API_URL;

export const getAllProductsService = async () => {
    let body;

    try {
        const res = await fetch(baseURL);
        body = await res.json();

        if (res.status !== 200) {
            throw new Error(body.message);
        }
    } catch (error) {
        throw error;
    }

    return body;
};
