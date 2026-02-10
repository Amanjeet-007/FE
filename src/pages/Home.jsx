import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/product/ProductCard"
import { useSelector } from "react-redux"

const Ads = [
    {
        img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
        heading: "Summer Collection",
        slogan: "Up to 40% off on premium styles for a limited time.",
        tag: ["New Arrivals"],
        button: "path"
    }
]

const categories = [
    { name: "Men", Path: "/Mens", img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071' },
    { name: "Women", Path: "/Mens", img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2070' },
    { name: "Kids", Path: "/Mens", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1iij5gJ5ZxFmQFNJ3Qjpw8v4unL61imt_Aw-kI-phLzQ-Ff_JayCoFFo1g287ephUF-WOMcFCWBR8C-2EhzPkREBvhPpoqVUKBS8HX5IyRtBrTxrQDQrlS3TQZfvGD1eek1zGIPZmWONqn44ufmDYsdhEu84IjsWP7xOfC-ggiRAa17Ya0bYkNMIs_Km_iqSED0O_-vvJOaH5LkBFzkHhmiYmTOnX16LfOnf_fro2RKv6EheOy0KaSCm2ibx_0l-um0bXOtJLCw' },
    { name: "Tech", Path: "/Mens", img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070' },
    { name: "Watches", path: "/", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2038" }
]

const Products = [
    { name: "Premium Headphone", image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070', price: 299, rating: 4.8, reviews: 120, badge: "" },
    { name: "Urban Runner Red", image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070', price: 299, rating: 4.8, reviews: 120, badge: "" },
    { name: "Retro Instant Cam", image: 'https://images.unsplash.com/photo-1526170315876-db1ad139c882?q=80&w=2070', price: 299, rating: 4.8, reviews: 120, badge: "" },
    { name: "Premium Watch", image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099', price: 299, rating: 4.8, reviews: 120, badge: "" },
    { name: "Smart Speaker", image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=1974', price: 299, rating: 4.8, reviews: 120, badge: "" },
    { name: "Nike Edition", image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070', price: 299, rating: 4.8, reviews: 120, badge: '40%' },
]

export default function Home() {
    const [index, setIndex] = useState(0)
    const authStatus = useSelector((state) => state.auth.value);
    

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navbar />

            {/* Hero & Ads Section */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
                <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[65vh]">

                    {/* Left: On Sale Grid */}
                    <div className="w-full md:w-1/3 flex flex-col">
                        <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-blue-600 rounded-full"></span> On Sale
                        </h2>
                        <div className="grid grid-cols-2 gap-3 h-full">
                            <div className="relative overflow-hidden rounded-3xl group h-40 md:h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL480_FMwebp_QL65_.jpg)` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                                    <span className="text-white font-bold text-xs bg-blue-600 px-3 py-1 rounded-full">Upto 65% Off</span>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-3xl group h-40 md:h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/71oW9ddfGsL._AC_UL480_FMwebp_QL65_.jpg)` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                                    <span className="text-white font-bold text-xs bg-blue-500 px-3 py-1 rounded-full">@35% Flat</span>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-3xl group h-40 md:h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/81EvwnQJXmL._AC_UL480_FMwebp_QL65_.jpg)` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                                    <span className="text-white font-bold text-xs bg-indigo-600 px-3 py-1 rounded-full">BOGO Free</span>
                                </div>
                            </div>
                            <div className="h-40 md:h-full rounded-3xl bg-blue-600 flex items-center justify-center text-white font-black text-xl hover:bg-blue-700 cursor-pointer transition-all shadow-lg shadow-blue-200">
                                More...
                            </div>
                        </div>
                    </div>

                    {/* Middle: Main Ads Banner */}
                    <div className="w-full md:w-1/3 relative h-[50vh] md:h-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                        {Ads.map((el, i) => (
                            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                <img src={el.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/90 flex flex-col justify-end p-8 text-white">
                                    <span className="bg-blue-500 text-[10px] uppercase tracking-[0.2em] font-bold w-fit px-3 py-1 rounded mb-3">{el.tag[0]}</span>
                                    <h2 className="text-4xl font-black mb-2">{el.heading}</h2>
                                    <p className="text-blue-100 text-sm mb-6 opacity-90">{el.slogan}</p>
                                    <button className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-bold w-fit hover:bg-blue-50 transition-colors active:scale-95 shadow-lg">
                                        Shop Collection
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Map/Explore */}
                    <div className="w-full md:w-1/3 h-[40vh] md:h-full relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                        <iframe className="absolute inset-0 w-full h-full grayscale opacity-50" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiAwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-6 text-center">
                            <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4 animate-pulse">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">Explore Nearby</h3>
                            <p className="text-blue-200 text-sm font-light">Find local flagship stores near your location</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-blue-900/5 ">
                <div className="w-full flex mx-auto px-4 md:px-10 flex-col">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-blue-900">Shop By Category</h2>
                            <p className="text-blue-600/60 font-medium">Curated collections just for you</p>
                        </div>
                        <button className="text-blue-600 font-bold hover:underline underline-offset-8">View All Categories</button>
                    </div>

                    <div className="flex gap-8 overflow-x-auto pb-6 no-scrollbar w-full justify-around">
                        {categories.map((el, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer min-w-[120px]">
                                <div className="relative w-28 h-28 mb-4">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300 opacity-20"></div>
                                    <div
                                        style={{ backgroundImage: `url(${el.img})` }}
                                        className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-xl group-hover:border-blue-500 transition-all duration-300"
                                    ></div>
                                </div>
                                <p className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{el.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Section */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-12 md:py-20">
                <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
                    <div className="flex items-center gap-4 flex-grow">
                        <h2 className="text-2xl md:text-3xl font-black text-blue-900 whitespace-nowrap">Trending Now</h2>
                        <div className="h-[2px] w-full bg-blue-100 hidden sm:block"></div>
                    </div>
                    {/* Mobile Swipe Indicator */}
                    <span className="text-xs font-bold text-blue-400 md:hidden animate-pulse">
                        Swipe →
                    </span>
                </div>

                {/* Responsive Wrapper: Scroll on mobile, Grid on desktop */}
                <div className="relative">
                    <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 snap-x snap-mandatory no-scrollbar">
                        {Products.map((el, i) => (
                            <div
                                key={i}
                                className="max-w-[280px] sm:min-w-[320px] md:min-w-full snap-center transform transition-all duration-300 hover:md:-translate-y-2"
                            >
                                <ProductCard product={el} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}