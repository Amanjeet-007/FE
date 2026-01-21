import React, { useState } from 'react';
import { Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import BottomMenu from "../components/layout/BottomMenu";
import Footer from "../components/layout/Footer";
import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
  // Mock data - in a real app, this would come from a Global State (Redux/Context)
  const [likedProducts, setLikedProducts] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      badge: "Sale"
    },
    {
      id: 2,
      name: "Minimalist Leather Watch",
      price: 150.00,
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar filter={false} />

      <main className="flexgrow container mx-auto px-4 py-6 mb-20 md:mb-10 mten">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="p-2 md:hidden hover:bg-gray-100 rounded-full">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
              Liked Products 
              <span className="text-sm font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                {likedProducts.length}
              </span>
            </h1>
          </div>
          
          {likedProducts.length > 0 && (
            <button className="text-sm font-medium text-red-600 hover:text-red-700">
              Clear All
            </button>
          )}
        </div>

        {likedProducts.length > 0 ? (
          /* Responsive Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Heart size={40} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Your wishlist is empty</h2>
            <p className="text-gray-500 mt-2 mb-6 max-w-xs">
              Save items you love here to find them easily later and keep track of price drops.
            </p>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
              <ShoppingBag size={20} />
              Start Shopping
            </button>
          </div>
        )}
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
      <BottomMenu />
    </div>
  );
}