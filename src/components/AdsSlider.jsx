import { useState, useEffect } from "react";

const ADS = [
  {
    id: "summer-collection",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    heading: "Summer Collection",
    slogan: "Up to 40% off on premium styles for a limited time.",
    tag: "New Arrivals",
  },
  {
    id: "winter-collection",
    img: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=2070",
    heading: "Winter Gear",
    slogan: "Stay warm with our latest insulated jackets.",
    tag: "Trending Now",
  },
  {
    id: "Everything For Kitchen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzbuDbQ0hUUBzDTVgB9JwZhFIOKBflOaBxebtg8tssA&s=10",
    heading: "Get Best Deals",
    slogan: "Best Product and price ",
    tag: "Fresh and Strong",
    path: "/kitchen",
  },
];

export default function AdsSlider() {
  const [adsIndex, setAdsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdsIndex((prevIndex) => 
        prevIndex === ADS.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] m-auto md:w-full relative h-[50vh] md:h-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
      {ADS.map((el, i) => (
        <div
          key={el.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === adsIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={el.img}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            alt={el.heading}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/20 to-blue-900/90 flex flex-col justify-end p-8 text-white">
            <span className="bg-blue-500 text-[10px] uppercase tracking-[0.2em] font-bold w-fit px-3 py-1 rounded mb-3">
              {el.tag}
            </span>
            <h2 className="text-4xl font-black mb-2">{el.heading}</h2>
            <p className="text-blue-100 text-sm mb-6 opacity-90">{el.slogan}</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-bold w-fit hover:bg-blue-50 transition-colors active:scale-95 shadow-lg">
              Shop Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}