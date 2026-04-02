/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getCart, deleteProductFromCart } from "../Api/cart";
import { Link } from "react-router-dom";
export default function Cart() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  // Define fetchCart outside so it can be reused
  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart({
        items: res.items || [],
        totalPrice: res.totalPrice || 0,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []); // Empty dependency array: only runs on mount

  const handleDelete = async (id) => {
    // 1. Optimistic Update: Remove from UI immediately
    const previousItems = [...cart.items];
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.productId !== id),
    }));

    try {
      await deleteProductFromCart(id);
      console.log("Deleted successfully");
    } catch (err) {
      // 2. Rollback if API fails
      setCart((prev) => ({ ...prev, items: previousItems }));
      alert("Failed to delete item");
    }
  };

  const subtotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShoppingBag /> Your Cart ({cart.items.length})
          </h1>

          {cart.items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-400">Your cart is empty</h2>
              <Link to="/store"><button className="mt-4 text-indigo-600 font-medium">Continue Shopping</button></Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* LEFT: CART ITEMS */}
              <div className="lg:w-2/3 space-y-4">
                {cart.items.map((item) => (
                  <div key={item.productId} className="bg-white p-4 rounded-xl shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border" />
                    
                    <div className="flex flex-col justify-between grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                          <p className="text-gray-500 text-sm">Unit Price: ₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => handleDelete(item.productId)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        {/* Simple Quantity Display (Add buttons here later) */}
                        <div className="flex items-center border rounded-lg px-2 py-1 gap-3">
                           <span className="text-sm font-medium">Qty: {item.quantity}</span>
                        </div>
                        <span className="font-bold text-indigo-600">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: SUMMARY */}
              <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-10 border border-gray-100">
                  <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium text-gray-900">₹{shipping}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-bold text-xl text-gray-900">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}