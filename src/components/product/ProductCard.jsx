import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    /* Using flex-col and h-full allows the card to grow with its content. 
       Removed fixed heights (h-96) to prevent text clipping on smaller screens.
    */
    <div className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Image Container: Fixed Aspect Ratio is key for responsive grids */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge: Top Left */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button: Always visible on mobile, hover effect on desktop */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity text-gray-600 hover:text-red-500 active:scale-95">
          <Heart size={18} />
        </button>
      </div>

      {/* Content Area: flex-grow ensures the bottom row stays aligned in a grid */}
      <div className="flex flex-col flexgrow p-4">
        
        {/* Rating Row */}
        <div className="flex items-center gap-1 mb-1">
          <Star className="text-yellow-400 fill-yellow-400" size={14} />
          <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        {/* Product Name: Line-clamp prevents long names from breaking the layout */}
        <h3 className="font-semibold text-sm md:text-base text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price and Action: mt-auto pushes this to the bottom of the card */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          
          <button className="p-2.5 bg-gray-100 text-gray-900 rounded-xl hover:bg-indigo-600 hover:text-white active:bg-indigo-700 transition-all">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;