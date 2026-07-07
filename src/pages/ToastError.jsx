/* eslint-disable react/prop-types */

export default function ToastError({ message }) {
  return (
    <div className="fixed top-5 right-5 z-50 
                    bg-white/80 backdrop-blur-lg 
                    border border-red-200 
                    shadow-lg rounded-xl px-5 py-3 
                    flex items-center gap-3 
                    animate-slideIn">

      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
        <span className="text-red-500 text-sm">!</span>
      </div>

      <p className="text-sm text-gray-700">{message}</p>
    </div>
  );
}