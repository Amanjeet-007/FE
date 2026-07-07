/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/layout/Navbar";
import BottomMenu from '../components/layout/BottomMenu'
import { useParams } from "react-router-dom";
import { searchResult } from "../Api/product";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export default function Searched() {
  const [products, setProducts] = useState([]);
  const { productname } = useParams();

  async function getproduct() {
    try {
      const res = await searchResult(productname);
      setProducts(res);
      return res;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
+
  useEffect(() => {
    getproduct();
  }, [productname]);

  getproduct();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar filter={false} />

      <div className="max-w-7xl mx-auto px-4 md:pt-28 pt-7  pb-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Search Results</h1>

          <p className="text-gray-500 mt-2">
            Showing results for:
            <span className="font-semibold text-black ml-2">
              &rdquo;{productname}"
            </span>
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {products.length} Product{products.length !== 1 ? "s" : ""} Found
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id || product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border"
              >
                {/* Product Image */}
                <div className="h-56 bg-gray-100">
                  <img
                    src={
                      product?.images?.[0]?.name ||
                      "https://via.placeholder.com/300x300?text=No+Image"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {product.brand || "No Brand"}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{product.price}
                    </span>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        product.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <Link to={`/productDetails/${product._id}`}>
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    View Product
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching with different keywords.
            </p>
          </div>
        )}
      </div>
       <BottomMenu/>
    </div>
  );
}
