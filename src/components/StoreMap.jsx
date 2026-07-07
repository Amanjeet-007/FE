export default function StoreMap() {
  return (
    <div className="w-[90%] m-auto md:w-1/3 h-[40vh] md:h-full relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
      <iframe
        className="absolute inset-0 w-full h-full grayscale opacity-50"
        src="https://maps.google.com/maps?q=flagship%20stores&t=&z=13&ie=UTF8&iwloc=&output=embed"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        title="Store Locations"
      ></iframe>
      <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-6 text-center">
        <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-1">Explore Nearby</h3>
        <p className="text-blue-200 text-sm font-light">Find local flagship stores near your location</p>
        <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg shadow">Find Stores</button>
      </div>
    </div>
  );
}