import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { productDetails } from "../Api/shop";
import { addToCart } from "../Api/cart";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState();
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();

  // Detect screen size for responsive animation logic
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    async function fetchData() {
      try {
        const res = await productDetails(id);
        setProduct(res.info);
        setSelectedImage(res.info.images[0].name);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id, 1);
      setIsAdded(true);
    } catch (err) {
      console.error("Failed to add to cart", err);
    }
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar filter={false} />

      <section className="min-h-screen px-4 md:px-6 py-10 bg-gray-50 overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 relative">
          
          {/* Main Product Card */}
          <motion.div 
            layout
            initial={false}
            animate={{ 
              // On mobile, keep 100%. On desktop, shrink to 65%
              width: (isAdded && !isMobile) ? "65%" : "100%" 
            }} 
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow flex flex-col gap-6"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {/* LEFT: Images */}
              <div>
                <motion.img 
                  layout
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-64 md:h-80 object-cover rounded-xl" 
                />
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {product.images?.map((img, i) => (
                    <img 
                      key={i} 
                      src={img.name} 
                      alt="thumb" 
                      onClick={() => setSelectedImage(img.name)} 
                      className={`w-14 h-14 md:w-16 md:h-16 object-cover rounded cursor-pointer border-2 transition-all ${selectedImage === img.name ? 'border-black' : 'border-transparent'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Info */}
              <div className="flex flex-col gap-3 md:gap-4 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-500 text-sm md:text-base">{product.brand}</p>
                  </div>
                  {/* Responsive Stock Badge */}
                  <div className={`flex items-center px-3 py-1 rounded-full text-white text-xs font-bold ${product.stock < 10 ? "bg-red-500" : "bg-green-500"}`}>
                    Stock: {product.stock}
                  </div>
                </div>

                <p className="text-green-600 font-bold text-xl md:text-2xl">₹{product.price}</p>
                
                <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {product.description}
                </div>

                {!isAdded && (
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart} 
                    className="bg-black text-white px-6 py-3 rounded-xl mt-4 font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Success Card (Sidebar on desktop, Slide-in on mobile) */}
          <AnimatePresence>
            {isAdded && (
              <motion.div 
                initial={isMobile ? { y: 50, opacity: 0 } : { x: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={isMobile ? { y: 50, opacity: 0 } : { x: 100, opacity: 0 }}
                className="w-full md:w-[35%] bg-white p-6 rounded-2xl shadow-xl border-2 border-green-500 flex flex-col items-center justify-center text-center gap-4 h-fit md:sticky md:top-10"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">✓</div>
                <div>
                  <h2 className="font-bold text-lg">Added to Cart!</h2>
                  <p className="text-sm text-gray-500">1 item added to your bag</p>
                </div>
                
                <div className="flex flex-col w-full gap-3">
                  <Link to="/checkout" className="bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 text-center">Proceed to Buy</Link>
                  <Link to="/cart" className="border border-black py-3 rounded-xl font-medium hover:bg-gray-50 text-center">View Cart</Link>
                  <button onClick={() => setIsAdded(false)} className="text-sm text-gray-500 underline mt-2 hover:text-black">Continue Shopping</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reviews Section */}
        <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow">
           <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
           {product.reviews.length > 0 ? (
             product.reviews.map((rev, i) => (
               <div key={i} className="border-b last:border-0 py-4">
                 <p className="font-semibold text-gray-800">{rev.user || "Verified Buyer"}</p>
                 <p className="text-yellow-500">{"⭐".repeat(rev.rating)}</p>
                 <p className="text-gray-600 mt-1">{rev.comment}</p>
               </div>
             ))
           ) : (
             <p className="text-gray-400 italic">No reviews yet for this product.</p>
           )}
        </div>

        {/* Similar Products Section */}
        {/* <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <div className="w-full h-32 md:h-40 bg-gray-100 rounded-lg mb-3 group-hover:bg-gray-200 transition-colors"></div>
                <h3 className="font-medium text-sm md:text-base truncate">Related Product {item}</h3>
                <p className="text-green-600 font-bold">₹999</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}