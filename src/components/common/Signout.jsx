import React from 'react';
import { LogOut, X } from 'lucide-react';

const SignOutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop - blurred for a premium feel */}
      <div 
        className="absolute inset-0 bg-[#002147]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          {/* Icon Circle */}
          <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
            <LogOut size={32} />
          </div>

          <h3 className="text-2xl font-bold text-[#002147] mb-2">
            Signing Out?
          </h3>
          <p className="text-slate-500 mb-8">
            Are you sure you want to log out? You'll need to sign back in to access your orders and saved items.
          </p>

          <div className="flex flex-col gap-3">
            {/* Confirm Button */}
            <button
              onClick={onConfirm}
              className="w-full bg-[#002147] text-white py-3 rounded-xl font-semibold hover:bg-[#003366] transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
            >
              Sign Out
            </button>

            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="w-full bg-white text-slate-600 py-3 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Stay Logged In
            </button>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-[#002147]" />
      </div>
    </div>
  );
};

export default SignOutModal;