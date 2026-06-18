//* eslint-disable no-unused-vars */
import api from "./axios";

export const createProduct = async (data) => {
  return api.post("/products/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getMyProduct = async () => {
  return api.get("/products/myproducts");
};

// export const editProduct = async (id, data) => {

// }

export const deleteProduct = async (id) => {
  try {
    return api.delete(`/products/delete/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const searchProduct = async (name) => {
  const res = await api.get(`/products/search?q=${name}`);
  // console.log(res.data)
  return res.data;
};

export const searchResult = async (productname)=>{
  const res  = await api.get(`/products/result/${productname}`)
  console.log(res.data.prodcuts)
  return res.data.products
}

export const recentSearch = async ()=>{
  const res = await api.get('/products/recentsearch')
  console.log(res.data)
  return res.data
}
