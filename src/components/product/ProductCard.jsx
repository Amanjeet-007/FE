import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className=" h-full group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="badge absolute top-3 left-3 bg-red-500 text-white text-xs font-bold rounded">
            {product.badge}
          </span>
        )}
        
      </div>
      <button className=" heart absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-gray-600 hover:text-red-500 ">
          <Heart size={18} />
        </button>
      <div className="absolute bottom-0 w-full">

      <div className="star">
        <div className="flex items-center gap-1">
          <Star className="text-yellow-400 fill-yellow-400" size={14} />
          <span className="text-md font-medium text-gray-700">{product.rating}</span>
          <span className="text-md text-gray-400">({product.reviews})</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <div className=" price flex items-center justify-between w-full">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className=" bg-gray-100 text-gray-900 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;