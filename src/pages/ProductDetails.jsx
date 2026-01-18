import { useState } from "react";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Count from "../components/common/Count"

export default function ProductDetails() {
    // State for demo purposes (In production, fetch these from your backend)
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Black');

    const product = {
        name: "Premium Cotton Hoodie",
        price: 500,
        originalPrice: 550,
        description: "Experience ultimate comfort with our premium cotton blend. Designed for durability and a modern fit, this piece is perfect for everyday wear. Features reinforced stitching and eco-friendly dyes.",
        colors: ["Black", "Navy", "Heather Gray"],
        sizes: ["S", "M", "L", "XL"]
    };

    return (
        <>
            <Navbar filter={false} />
            <section className="min-h-screen ">
                <div className="flex md:flex-row flex-col w-full max-w-7xl mx-auto px-4 gap-8">
                    {/* LEFT: IMAGE SECTION */}
                    <div className="md:w-1/2 w-full">
                        <div className="fullImg h-96 bg-gray-200 rounded-2xl relative overflow-hidden">
                            {/* Placeholder for Main Image */}
                            <img src="via.placeholder.com" alt="Product" className="w-full h-full object-cover" />
                            
                            <div className="dot flex gap-1 absolute bottom-4 left-1/2 -translate-x-1/2">
                                <div className="h-2 w-2 rounded-full bg-white opacity-100"></div>
                                <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
                                <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
                            </div>

                            <button className="like absolute right-6 bottom-10 p-2 bg-white/80 rounded-full hover:bg-white transition-all shadow-sm">
                                <svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(239, 68, 68, 1)"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                            </button>
                        </div>

                        {/* Thumbnail Collection */}
                        <div className="w-full mt-4 flex items-center gap-4 overflow-x-auto pb-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-20 w-20 flex-shrink-0 bg-gray-200 rounded-xl cursor-pointer hover:ring-2 ring-black transition-all">
                                     <img src={`via.placeholder.com`} className="rounded-xl" alt="thumb" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DETAILS SECTION */}
                    <div className="details w-full md:w-1/2 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <h1 className="font-bold text-4xl text-gray-900 uppercase">{product.name}</h1>
                                <div className="rating flex items-center bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-bold">
                                    ★ 4.5
                                </div>
                            </div>
                            <p className="text-3xl font-semibold text-gray-800">
                                ₹{product.price} <span className="font-normal text-xl line-through text-gray-400 ml-2">₹{product.originalPrice}</span>
                            </p>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <h3 className="font-bold text-gray-700 mb-3">Color: <span className="font-medium text-gray-500">{selectedColor}</span></h3>
                            <div className="flex gap-3">
                                {product.colors.map(color => (
                                    <button 
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-bold text-gray-700 mb-3">Select Size</h3>
                            <div className="flex gap-3">
                                {product.sizes.map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 flex items-center justify-center rounded-lg border font-bold transition-all ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black hover:border-black'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-bold text-gray-700 mb-2">Product Description</h3>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Cart Controls */}
                        <div className="flex items-center gap-6 mt-4">
                            <Count />
                            <button className="flex-1 bg-black text-white py-4 px-8 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width='24' viewBox="0 0 24 24" fill="white"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
                                Add To Cart | ₹{product.price}
                            </button>
                        </div>

                        {/* Badges/Tags */}
                        <div className="flex gap-4 mt-4 border-t pt-6">
                            <span className="flex items-center gap-1 text-xs font-bold text-gray-500 uppercase">⚡ Fast Delivery</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-gray-500 uppercase">🌿 100% Organic</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-gray-500 uppercase">🔄 7 Day Return</span>
                        </div>
                    </div>
                </div>
                {/* --- REVIEWS SECTION --- */}
<div className="max-w-7xl mx-auto px-4 mt-20 border-t pt-16">
    <h2 className="text-3xl font-bold mb-10 text-gray-900">Customer Feedback</h2>
    
    <div className="flex flex-col lg:flex-row gap-16">
        {/* 1. Rating Snapshot & Summary */}
        <div className="lg:w-1/3">
            <div className="flex items-center gap-6 mb-8">
                <div className="text-6xl font-extrabold text-black">4.8</div>
                <div>
                    <div className="flex text-yellow-400 text-2xl mb-1">★★★★★</div>
                    <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Based on 1,240 reviews</p>
                </div>
            </div>
            
            {/* Visual Progress Bars */}
            {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4 mb-3">
                    <span className="w-4 text-sm font-bold text-gray-700">{star}</span>
                    <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-black rounded-full" 
                            style={{ width: `${star === 5 ? 82 : star === 4 ? 12 : 6}%` }}
                        ></div>
                    </div>
                    <span className="w-10 text-xs font-medium text-gray-400 text-right">{star === 5 ? '82%' : star === 4 ? '12%' : '6%'}</span>
                </div>
            ))}
            
            <button className="w-full mt-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg">
                Write a Review
            </button>
        </div>

        {/* 2. Individual Reviews List */}
        <div className="lg:w-2/3 flex flex-col gap-10">
            {/* Filter Bar */}
            <div className="flex justify-between items-center border-b pb-6">
                <div className="flex gap-4">
                    <button className="text-sm font-bold border-b-2 border-black pb-1">Most Relevant</button>
                    <button className="text-sm font-bold text-gray-400 hover:text-black transition-colors">Newest</button>
                </div>
                <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    Filter Stars
                </div>
            </div>

            {/* Individual Review Item */}
            {[1, 2].map((i) => (
                <div key={i} className="group border-b border-gray-100 pb-10 last:border-0">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex text-yellow-400 text-sm mb-2">★★★★★</div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-lg text-gray-900">Aryan Malik</span>
                                <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-black uppercase tracking-tighter">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                    Verified Buyer
                                </span>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">January 08, 2026</span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        "The quality surpassed my expectations. The fabric is durable and breathable, which is rare at this price point. I've recommended this to three friends already!"
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black">
                            <span>Helpful?</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">24</span>
                        </button>
                        <button className="text-xs font-bold text-gray-400 hover:text-red-500">Report</button>
                    </div>
                </div>
            ))}

            <button className="self-center mt-4 text-black font-bold border-2 border-black px-8 py-3 rounded-xl hover:bg-black hover:text-white transition-all">
                Load More Reviews
            </button>
        </div>
    </div>
</div>


                {/* You Might Also Like Section (Simulated) */}
                <div className="max-w-7xl mx-auto px-4 mt-20 mb-10">
                    <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(item => (
                            <div key={item} className="aspect-square bg-gray-100 rounded-xl"></div>
                        ))}
                    </div>
                </div>

                <Footer />
            </section>
        </>
    )
}
