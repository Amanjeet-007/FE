import React, { useState } from 'react';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            quantity: 1,
            color: "Space Gray",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
        },
        {
            id: 2,
            name: "Minimalist Leather Watch",
            price: 150.00,
            quantity: 2,
            color: "Tan/Silver",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
        }
    ]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 15.00;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar filter={false} />

            <main className="flexgrow container px-4 py-6 ">
                <div className="flex items-center gap-4 mb-6">
                    <button className="md:hidden p-2 bg-white rounded-full shadow-sm">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">Your Cart ({cartItems.length})</h1>
                </div>

                {cartItems.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* 1. PRODUCT LIST (Left Column) */}
                        <div className="lg:w-2/3 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 items-center shadow-sm">
                                    {/* Image */}
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden flexshrink">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Details */}
                                    <div className="flexgrow flex flex-col justify-between h-24 md:h-32">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-sm md:text-lg line-clamp-1">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mt-1">{item.color}</p>
                                            </div>
                                            <button className="text-gray-400 hover:text-red-500 p-1">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <span className="font-bold text-lg text-gray-900">${item.price.toFixed(2)}</span>

                                            {/* Quantity Selector */}
                                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                                <button className="p-1 hover:bg-white rounded-md transition-colors"><Minus size={14} /></button>
                                                <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                                                <button className="p-1 hover:bg-white rounded-md transition-colors"><Plus size={14} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 2. ORDER SUMMARY (Right Column) */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

                                <div className="space-y-3 pb-4 border-bottom border-gray-100">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span className="text-xs text-gray-400">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="flex justify-between border-t border-gray-100 pt-4 mt-4 mb-6">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
                                </div>

                                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-100">
                                    Checkout Now
                                </button>

                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 uppercase font-semibold">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Secure Checkout Guaranteed
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                        <ShoppingBag size={64} className="text-gray-200 mb-4" />
                        <h2 className="text-xl font-bold text-gray-900">Your cart is empty</h2>
                        <button className="mt-4 text-indigo-600 font-semibold hover:underline">Return to Shop</button>
                    </div>
                )}
            </main>


            <Footer />
        </div>
    );
}