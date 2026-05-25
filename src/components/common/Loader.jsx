/* eslint-disable react/prop-types */

export default function Loader({
  type = "full", // "blur" | "full"
  loading = false,
  children,
  text = "Loading..."
}) {
  if (!loading) return children;

  // FULL SCREEN LOADER
  if (type === "full") {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="text-gray-600 text-sm">{text}</p>
        </div>
      </div>
    );
  }

  // BLUR + OVERLAY LOADER
  if (type === "blur") {
    return (
      <div className="relative z-50 top-50">
        
        {/* Content */}
        <div className="transition-all duration-300 blur-[2px] brightness-90 pointer-events-none select-none">
          {children}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Glass Card */}
          <div className="px-8 py-6 rounded-2xl 
                          bg-white/30 backdrop-blur-xl 
                          shadow-xl border border-white/20
                          flex flex-col items-center gap-4
                          animate-fadeIn">

            {/* Animated Loader */}
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
            </div>

            {/* Text */}
            <p className="text-gray-800 text-sm font-medium tracking-wide">
              {text}
            </p>

            {/* Subtle Pulse Bar */}
            <div className="w-24 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-blue-500 animate-pulse"></div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return children;
}