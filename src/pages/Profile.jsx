import { 
  Package, 
  MapPin, 
  Heart, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CreditCard,
  User
} from 'lucide-react';
import { Link } from 'react-router';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const menuItems = [
  { icon: Package, label: 'My Orders', desc: 'Track, return, or buy things again', color: 'text-blue-600',path:'/order' },
  { icon: Heart, label: 'Wishlist', desc: 'Your saved items', color: 'text-pink-600' , path:'/wishlist' },
  { icon: MapPin, label: 'Addresses', desc: 'Edit addresses for orders', color: 'text-green-600' , path:'/address'},
  { icon: CreditCard, label: 'Payments', desc: 'Manage cards and billing', color: 'text-amber-600',path:'/payment' },
  { icon: Settings, label: 'Settings', desc: 'Profile details and password', color: 'text-gray-600',path:'/settings' },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar filter={false} />

      {/* Main Content Area */}
      <main className="flexgrow container mx-auto px-4 py-8 mb-20 md:mb-0 mten">
        <div className="max-w-6xl mx-auto">
          
          {/* Header / User Intro */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <User size={48} />
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-gray-600 hover:text-indigo-600">
                <Settings size={16} />
              </button>
            </div>
            
            <div className="text-center md:text-left flexgrow">
              <h1 className="text-2xl font-bold text-gray-900">Alex Thompson</h1>
              <p className="text-gray-500">alex.thompson@example.com</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Pro Member</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">12 Orders</span>
              </div>
            </div>
      {/* Recent Order Sidebar (Hidden on small mobile, visible on tablet/desktop) */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 px-1">Recent Order</h2>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded">In Transit</span>
                  <span className="text-xs text-gray-400">#ORD-8821</span>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flexshrink">
                    <img src="/api/placeholder/64/64" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">Wireless Noise Cancelling Headphones</h4>
                    <p className="text-xs text-gray-500">Expected: Oct 24</p>
                  </div>
                </div>
                <Link to={'/track'}>
                <button className="w-full py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                  Track Order
                </button></Link>
              </div>
            </div>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
              <LogOut size={18} />
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mobile/Desktop Menu Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                <button 
                  
                  className="flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all text-left group"
                >
                  <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-white transition-colors mr-4`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <div className="flexgrow">
                    <h3 className="font-semibold text-gray-900">{item.label}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-indigo-500 transition-colors" />
                </button>
                </Link>
              ))}
              
              {/* Logout visible only on mobile inside the grid */}
              <button className="md:hidden flex items-center p-4 bg-white rounded-xl border border-red-50 text-red-600 shadow-sm">
                 <LogOut size={24} className="mr-4" />
                 <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </main>

     <Footer/>
    </div>
  );
}