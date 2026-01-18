import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';


const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium text-sm border border-indigo-500/30">
            🎉 Summer Sale is Live
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Upgrade Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Digital Lifestyle
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            Experience the latest in technology with our curated collection of premium gadgets. Free shipping on orders over $99.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" icon={ArrowRight}>Shop Collection</Button>
            <Button variant="outline">View Deals</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;