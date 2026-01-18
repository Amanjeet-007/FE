
// options like cart or rozapay etc
import React, { useState } from 'react';

const paymentOptions = [
    { id: 'razorpay', name: 'Razorpay', type: 'Gateway', icon: '💳' },
    { id: 'upi', name: 'UPI (PhonePe/GPay)', type: 'Instant', icon: '📱' },
    { id: 'card', name: 'Credit / Debit Card', type: 'Manual', icon: '🌐' },
    { id: 'cod', name: 'Cash on Delivery', type: 'Cash', icon: '🚚' },
];

export default function PaymentMethods({ totalPrice }) {
    const [selectedMethod, setSelectedMethod] = useState('razorpay');

    const handleCheckout = () => {
        if (selectedMethod === 'razorpay') {
            // Trigger Razorpay logic (see implementation below)
            console.log("Initiating Razorpay payment...");
        } else {
            console.log(`Processing ${selectedMethod} payment...`);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md " style={{ padding:"25px" }}>
            <h3 className="text-xl font-bold " style={{marginBottom:"10px"}}>Choose Payment Method</h3>
            
            <div className="flex flex-col gap-3">
                {paymentOptions.map((option) => (
                    <button
                        key={option.id}
                        style={{padding:"10px"}}
                        onClick={() => setSelectedMethod(option.id)}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                            selectedMethod === option.id 
                            ? 'border-black bg-gray-50' 
                            : 'border-gray-100 hover:border-gray-200'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{option.icon}</span>
                            <div className="text-left">
                                <p className="font-bold text-gray-900">{option.name}</p>
                                <p className="text-xs text-gray-500 uppercase font-semibold">{option.type}</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedMethod === option.id ? 'border-black' : 'border-gray-300'
                        }`}>
                            {selectedMethod === option.id && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                        </div>
                    </button>
                ))}
            </div>

            <button 
                onClick={handleCheckout}
                className="w-full mt-8 bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
                Pay ₹{totalPrice} with {paymentOptions.find(o => o.id === selectedMethod).name}
            </button>
        </div>
    );
}
