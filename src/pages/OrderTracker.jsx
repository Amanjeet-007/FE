import { Package, Truck, CheckCircle, MapPin, Box, ArrowLeft, Phone } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function OrderTracker() {
  const orderStatus = [
    { id: 1, title: 'Order Placed', date: 'Oct 20, 09:00 AM', status: 'completed' },
    { id: 2, title: 'Processing', date: 'Oct 20, 11:30 AM', status: 'completed' },
    { id: 3, title: 'Shipped', date: 'Oct 21, 04:15 PM', status: 'current' },
    { id: 4, title: 'Out for Delivery', date: 'Expected Today', status: 'pending' },
    { id: 5, title: 'Delivered', date: 'Expected Oct 22', status: 'pending' },
  ];

  return (
    <div className=" bg-gray-50 flex flex-col">
      <Navbar filter={false} />

      <main className="flexgrow container mx-auto px-4 py-6 mb-24 md:mb-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button & Title */}
          <div className="flex items-center gap-4 mb-6">
            <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Track Order</h1>
              <p className="text-sm text-gray-500">ID: #ORD-9928174</p>
            </div>
          </div>

          {/* 1. Status Summary Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Truck size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Estimated Delivery</p>
                  <h2 className="text-xl font-bold text-gray-900">Tomorrow, 22nd Oct</h2>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2.5 rounded-xl font-semibold transition-colors">
                <Phone size={18} />
                Contact Carrier
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2. Order Stepper (The Timeline) */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-8">Delivery Progress</h3>
              
              <div className="relative">
                {orderStatus.map((step, index) => (
                  <div key={step.id} className="relative flex gap-4 pb-10 last:pb-0">
                    {/* The Line */}
                    {index !== orderStatus.length - 1 && (
                      <div className={`absolute left-[15px] top-8 w-0.5 h-full ${
                        step.status === 'completed' ? 'bg-indigo-600' : 'bg-gray-200'
                      }`} />
                    )}

                    {/* The Icon/Circle */}
                    <div className="relative z-10">
                      {step.status === 'completed' ? (
                        <div className="bg-indigo-600 rounded-full p-1.5 text-white">
                          <CheckCircle size={18} />
                        </div>
                      ) : step.status === 'current' ? (
                        <div className="bg-white border-4 border-indigo-600 rounded-full p-1.5 animate-pulse">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                        </div>
                      ) : (
                        <div className="bg-gray-200 rounded-full p-2.5" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <p className={`font-bold ${
                        step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Shipment Details (Sidebar) */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <MapPin size={18} className="text-indigo-600" />
                   Delivery Address
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Alex Thompson <br />
                  123 Fashion Street, Suite 4B <br />
                  New York, NY 10001 <br />
                  United States
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <Box size={18} className="text-indigo-600" />
                   Items in Shipment
                </h3>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flexshrink">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" className="object-cover w-full h-full" alt="Product" />
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flexshrink">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100" className="object-cover w-full h-full" alt="Product" />
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 border border-dashed border-gray-200">
                    +1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}