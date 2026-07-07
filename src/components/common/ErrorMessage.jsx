/* eslint-disable react/prop-types */
export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-3 mt-3 
                    rounded-xl bg-red-50 border border-red-200 
                    text-red-600 text-sm animate-fadeIn">

      {/* Icon */}
      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100">
        <span className="text-red-500 text-xs">!</span>
      </div>

      {/* Message */}
      <p className="flex-1">{message}</p>

      {/* Close */}
      <button className="text-red-400 hover:text-red-600 transition">
        ✕
      </button>
    </div>
  );
}