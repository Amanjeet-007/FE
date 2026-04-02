/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  ShoppingCart,
  Star,
  Heart,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../../Api/cart"; // adjust path

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(0);
  const [loading, setLoading] = useState(false);

  // 🛒 Add to cart
  const handleAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);
      await addToCart(product._id, 1);
      setQty(1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ➕ Increase
  const increaseQty = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);
      await addToCart(product._id, 1);
      setQty((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ➖ Decrease (UI only for now)
  const decreaseQty = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (qty > 1) {
      setQty((prev) => prev - 1);
    } else {
      setQty(0);
    }
  };

  return (
    <Link to={`/productDetails/${product._id}`}>
      <div className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
        
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0].name}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm"
          >
            <Heart size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <span className="text-xs font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Bottom */}
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>

            {/* 🔥 COUNT UI */}
            {qty === 0 ? (
              <button
                onClick={handleAdd}
                disabled={loading}
                className="p-2.5 bg-gray-100 text-gray-900 rounded-xl hover:bg-indigo-600 hover:text-white transition"
              >
                <ShoppingCart size={20} />
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-2 py-1">
                <button
                  onClick={decreaseQty}
                  className="p-1 hover:bg-white rounded"
                >
                  <Minus size={16} />
                </button>

                <span className="text-sm font-semibold w-5 text-center">
                  {qty}
                </span>

                <button
                  onClick={increaseQty}
                  disabled={loading}
                  className="p-1 hover:bg-white rounded"
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;