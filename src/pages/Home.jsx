import { useState, useEffect } from "react";
import { allProducts } from "../Api/shop"; // Api

//Sub components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SaleGrid from "../components/SalesGrid";
import StoreMap from "../components/StoreMap";
import ProductCard from "../components/product/ProductCard";
import AdsSlider from "../components/AdsSlider";

const CATEGORIES = [
  {
    name: "Men",
    path: "/mens",
    img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071",
  },
  {
    name: "Women",
    path: "/womens",
    img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2070",
  },
  {
    name: "Kids",
    path: "/kids",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF1iij5gJ5ZxFmQFNJ3Qjpw8v4unL61imt_Aw-kI-phLzQ-Ff_JayCoFFo1g287ephUF-WOMcFCWBR8C-2EhzPkREBvhPpoqVUKBS8HX5IyRtBrTxrQDQrlS3TQZfvGD1eek1zGIPZmWONqn44ufmDYsdhEu84IjsWP7xOfC-ggiRAa17Ya0bYkNMIs_Km_iqSED0O_-vvJOaH5LkBFzkHhmiYmTOnX16LfOnf_fro2RKv6EheOy0KaSCm2ibx_0l-um0bXOtJLCw",
  },
  {
    name: "Tech",
    path: "/tech",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
  {
    name: "Watches",
    path: "/watches",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2038",
  },
  {
    name: "Grocery",
    path: "/grocery",
    img: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aH6BNUMqNJQqILDE_20240730_Assortment_4_Fill.jpg",
  },
  {
    name: "Cake",
    path: "/cake",
    img: "https://whipped.in/cdn/shop/files/WhatsAppImage2023-12-12at11.29.28PM_1080x.jpg?v=1748459537",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchProducts() {
      try {
        const data = await allProducts();
        if (isMounted) setProducts(data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-700 min-h-screen font-sans dark:text-white">
      <Navbar />

      {/* Hero & Ads Section */}
      <section className="max-w-360 mx-auto px-0 md:px-10 py-4 overflow-hidden ">
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[65vh]">
          {/* Left: On Sale Grid */}
          <div className="w-[90%] m-auto h-full md:w-1/3 flex flex-col">
            <h2 className="text-2xl font-black dark:text-white text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span> On Sale
            </h2>
            <SaleGrid />
          </div>

          {/* Middle: Main Ads Banner */}
          <div className="w-[90%] m-auto md:w-1/3 relative h-[50vh] md:h-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <AdsSlider />
          </div>

          {/* Right: Map/Explore Section */}
          <StoreMap />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-blue-900/5 relative flex">
        <div
          className="w-full flex mx-auto px-4 md:px-10 flex-col transition-all duration-300 overflow-hidden"
          style={
            seeAll
              ? { height: "450px", overflowY: "scroll" }
              : { height: "350px" }
          }
        >
          <div className="flex justify-between items-end mb-10">
            <div className="w-full absolute top-5 bg-[#ecf0f6] dark:bg-transparent z-40">
              <h2 className="md:text-3xl text-2xl font-black text-blue-900 dark:text-white">
                Shop By Category
              </h2>
              <p className="text-blue-600/60 font-medium dark:text-white">
                Curated collections just for you
              </p>
            </div>
          </div>

          <div className="cat flex md:gap-14 gap-1 md:overflow-x-auto flex-wrap pb-6 no-scrollbar w-full justify-around mt-9 md:mt-16 ">
            {CATEGORIES.map((el) => (
              <div
                key={el.name}
                className="flex flex-col items-center m-2 cursor-pointer group"
              >
                <div className="relative md:w-28 md:h-28 w-15 h-15 mb-4">
                  <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300 opacity-20"></div>
                  <div
                    style={{ backgroundImage: `url(${el.img})` }}
                    className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-xl group-hover:border-blue-500 transition-all duration-300"
                  ></div>
                </div>
                <p className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                  {el.name}
                </p>
              </div>
            ))}
          </div>
          
          <button
            className="text-blue-600 bg-blue-900/5 -ml-4 w-full p-2 md:bg-transparent font-bold hover:underline underline-offset-8 bottom-0 md:relative md:bottom-0 md:left-0 absolute z-50"
            onClick={() => setSeeAll((prev) => !prev)}
          >
            View All Categories
            <br />
            <span
              className="md:hidden w-full flex items-center justify-center transition-transform duration-300"
              style={
                seeAll
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            >
              <svg
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(21, 93, 252)"
              >
                <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z"></path>
              </svg>
            </span>
          </button>
        </div>

      </section>

      {/* Trending Section */}
      <section className="max-w-360 mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-4 grow">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 whitespace-nowrap">
              Trending Now
            </h2>
            <div className="h-0.5 w-full bg-blue-100 hidden sm:block"></div>
          </div>
          <span className="text-xs font-bold text-blue-400 md:hidden animate-pulse">
            Swipe →
          </span>
        </div>

        <div className="relative">
          <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 snap-x snap-mandatory no-scrollbar">
            {products.map((product, i) => (
              <div
                key={product.id || i}
                className="max-w-70 sm:min-w-[320px] md:min-w-full snap-center transform transition-all duration-300 hover:md:-translate-y-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
