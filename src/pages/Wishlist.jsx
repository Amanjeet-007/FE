/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from 'react';
// import { Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import BottomMenu from "../components/layout/BottomMenu";
import Footer from "../components/layout/Footer";
import useSession from "../hooks/useSession";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
  const { getSession } = useSession();
  const user = getSession();
  const navigate = useNavigate();
  // Mock data - in a real app, this would come from a Global State (Redux/Context)
  // const [likedProducts, setLikedProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Premium Wireless Headphones",
  //     price: 299.99,
  //     rating: 4.8,
  //     reviews: 124,
  //     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  //     badge: "Sale"
  //   },
  //   {
  //     id: 2,
  //     name: "Minimalist Leather Watch",
  //     price: 150.00,
  //     rating: 4.5,
  //     reviews: 89,
  //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  //   }
  // ]);
  useEffect(()=>{
    if(!user){
      navigate("/auth")
    }
  },[])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar filter={false} />
      {/* card navigator */}
      <Link to={'/cart'}>
      <div className="h-20 w-full bg-yellow-400 flex items-center justify-between px-5">
        <p className="font-bold text-xl text-blue-600">VIEW CART</p>
        <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(38,53,185,1)"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
      </div>
      </Link>
      {/* linked products */}
      <main> Welcome to wishlist</main>
      <div className="hidden md:block">
        <Footer />
      </div>
      <BottomMenu />
    </div>
  );
}
/*
 <main className="flexgrow container mx-auto px-4 py-6 mb-20 md:mb-10 mten">

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
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (

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
 */
