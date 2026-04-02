import api from "./axios";
// get all product to list 
export const allProducts = async () => {
    const res = await api.get('/products')
    return res.data
};
export const productDetails = async (id) => {
    const res = await api.get(`/products/details/${id}`)
    return res.data
};



// use Algorithms to show product in ads and other way and categories
// get the product and it's compeleted purchases and ranked by this
