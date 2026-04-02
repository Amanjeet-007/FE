import api from "./axios";

export async function addToCart(id, quantity = 1) {
  try {
    const res = await api.post("/cart/add", {
      id,
      quantity: Number(quantity)
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getCart() {
  try {
    const res = await api.get("/cart");
    console.log(res.data.data)
    // Correct path
    return res.data.data;

  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteProductFromCart(id){
  const res = await api.delete(`/cart/remove/${id}`)
  console.log(res.data)
}