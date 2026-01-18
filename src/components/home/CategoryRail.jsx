import React from 'react';
import { CATEGORIES } from '../../data/mockData';

const CategoryRail = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-500 mt-1">Explore our most popular collections</p>
        </div>
        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 text-sm hidden sm:block">
          View All Categories &rarr;
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="group p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 cursor-pointer transition-all">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
              {cat.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
            <p className="text-xs text-gray-500 font-medium">{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryRail;