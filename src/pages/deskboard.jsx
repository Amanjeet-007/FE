/* eslint-disable react/prop-types */
import Navbar from "../components/layout/Navbar";
import BottomMenu from "../components/layout/BottomMenu";
import { useEffect, useState } from "react";
import { createProduct, deleteProduct, getMyProduct } from "../Api/product";

const stats = [
  { label: "Today Revenue", value: "$1,280", change: "+12.4%", positive: true },
  { label: "Orders Today", value: "34", change: "+5.8%", positive: true },
  {
    label: "Low Stock Items",
    value: "7",
    change: "-2 since yesterday",
    positive: true,
  },
  {
    label: "Open Support Tickets",
    value: "3",
    change: "+1 new",
    positive: false,
  },
];

const recentOrders = [
  {
    id: "#ECO-1234",
    customer: "Riya Sharma",
    amount: "$89.00",
    status: "Paid",
  },
  {
    id: "#ECO-1235",
    customer: "Aarav Patel",
    amount: "$149.00",
    status: "Pending",
  },
  {
    id: "#ECO-1236",
    customer: "Kunal Mehta",
    amount: "$42.00",
    status: "Shipped",
  },
  {
    id: "#ECO-1237",
    customer: "Anika Verma",
    amount: "$210.00",
    status: "Paid",
  },
];

const topProducts = [
  { name: "Eco Bottle", sold: 122, stock: 48 },
  { name: "Bamboo Brush Set", sold: 95, stock: 22 },
  { name: "Reusable Grocery Bag", sold: 88, stock: 13 },
  { name: "Compost Bin", sold: 66, stock: 8 },
];

function statusClasses(status) {
  if (status === "Paid")
    return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (status === "Pending")
    return "bg-orange-100 text-orange-700 border-orange-200";
  return "bg-blue-100 text-blue-700 border-blue-200";
}

function States() {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <article
            key={item.label}
            className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              {item.label}
            </p>
            <h2 className="text-3xl font-black mt-2 text-slate-800">
              {item.value}
            </h2>
            <div
              className={`inline-flex items-center mt-3 px-2 py-1 rounded-lg text-xs font-bold ${item.positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
            >
              {item.change}
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <article className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-800">Recent Orders</h3>
            <button className="text-sm font-bold text-[#0052ff] hover:text-blue-800 transition-colors uppercase tracking-tight">
              View all activity
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] uppercase tracking-widest text-slate-400 border-b border-slate-50">
                  <th className="pb-4 pr-4">Order ID</th>
                  <th className="pb-4 pr-4">Customer</th>
                  <th className="pb-4 pr-4">Amount</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-5 pr-4 font-bold text-slate-700">
                      {order.id}
                    </td>
                    <td className="py-5 pr-4 text-slate-600 font-medium">
                      {order.customer}
                    </td>
                    <td className="py-5 pr-4 font-black text-slate-800">
                      {order.amount}
                    </td>
                    <td className="py-5">
                      <span
                        className={`text-[10px] uppercase tracking-tighter font-black px-3 py-1.5 rounded-xl border-2 ${statusClasses(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* Top Products Sidebar */}
        <article className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Top Products
          </h3>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.name}
                className="group rounded-3xl border border-slate-100 p-4 bg-[#fcfdfe] hover:border-blue-200 hover:bg-white transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-slate-800 text-lg leading-tight">
                    {product.name}
                  </p>
                  <span className="bg-blue-50 text-[#0052ff] text-[10px] font-black px-2 py-0.5 rounded-md">
                    HOT
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-slate-500">
                    Sold:{" "}
                    <span className="text-slate-900 font-bold">
                      {product.sold}
                    </span>
                  </p>
                  <p
                    className={`font-bold ${product.stock <= 15 ? "text-rose-500" : "text-emerald-500"}`}
                  >
                    {product.stock} in stock
                  </p>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-[#0052ff] h-full rounded-full transition-all duration-500"
                    style={{ width: `${(product.sold / 150) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
} // shop analisis (states data jsx)

/// eslint-disable-next-line react/prop-types
const ProductCard = ({ product , refresh }) => {

 async function deleteHandler(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        console.log("Product deleted");
        refresh(); // This re-fetches the list so the card disappears
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  }

  return (
    <div className=" mr-10 group relative bg-white rounded-2xl border border-blue-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-80 w-min">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden w-60 bg-gray-100">
        <img
          src={product.images[0]?.name || "/placeholder-img.jpg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-900 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        <div className="mb-1 flex justify-between items-start">
          <p className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
            {product.brand}
          </p>
          <div className="flex items-center gap-1">
            <span
              className={`h-2 w-2 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="text-[10px] font-medium text-gray-500">
              {product.stock} in stock
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-blue-950 truncate mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-blue-50">
          <p className="text-xl font-black text-blue-900">${product.price}</p>

          {/* Dashboard Actions */}
          <div className="flex gap-2">
            <button
              // onClick={() => onEdit(product)}
              className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              title="Edit Product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
            <button
              onClick={()=> deleteHandler(product._id)}
              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
              title="Delete Product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Products() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const allProducts = async () => {
    try {
      const result = await getMyProduct();
      setData(result.data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div className="flex items-center flex-wrap justify-center md:justify-start w-full">
      {loading ? "Loading....." : data.map((product, i) => (
        <div key={i}> 
          {/* Pass allProducts as a prop to refresh the list after delete */}
          <ProductCard product={product} refresh={allProducts} />
        </div>
      ))}
    </div>
  );
}

export default function Deskboard() {
  const [create_one, setCreate_one] = useState(false);
  const [viewState, setViewState] = useState(false);

  // Form State matching your Mongoose Schema
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: 1,
    category: "",
    img: [],
    brand: "Generic",
    isFeatured: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Map files to include a 'preview' property
    const filesWithPreviews = selectedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );

    setFormData((prev) => ({
      ...prev,
      img: [...prev.img, ...filesWithPreviews],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // text fields
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    
    if(formData.stock >= 0){
    data.append("stock", formData.stock);
    }
    data.append("category", formData.category);
    data.append("brand", formData.brand);
    data.append("isFeatured", formData.isFeatured);

    formData.img.forEach((file) => {
      data.append("img", file);
    });

    try {
      await createProduct(data); // ✅ SEND FormData
      setCreate_one(false);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const allProducts = async () => {
    const all = await getMyProduct();
    return all.data.products;
  };

  allProducts()

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar filter={false} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 mt-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-1">
              Seller Panel
            </p>
            <h1 className="text-4xl font-extrabold text-[#1a3a8a] tracking-tight">
              Dashboard
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCreate_one(true)}
              className="px-6 py-2.5 rounded-2xl bg-[#0052ff] text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Add Product
            </button>
            <button
              to="/my product"
              className="px-6 py-2.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all text-center"
              onClick={() => setViewState((e) => !e)}
            >
              {viewState ? "View Products" : "View State"}
            </button>
          </div>
        </div>

        {/* --- POPUP MODAL --- */}
        {create_one && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-y-auto max-h-[90vh]">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800">
                    Add New Product
                  </h2>
                  <button
                    onClick={() => setCreate_one(false)}
                    className="text-slate-400 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Product Name*
                    </label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  {/* IMAGE INPUT SECTION */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Product Images
                    </label>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-slate-100 transition-colors relative">
                      <input
                        type="file"
                        name="img"
                        multiple
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      <p className="text-slate-500 font-medium">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>

                    {/* Image Preview Thumbnails */}
                    {formData.img.length > 0 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto">
                        {formData.img.map((file, idx) => (
                          <div
                            key={idx}
                            className="h-16 w-16 rounded-lg overflow-hidden border border-slate-200 shrink-0"
                          >
                            <img
                              alt="preview"
                              src={file.preview} // Use the generated string here
                              onLoad={() => URL.revokeObjectURL(file.preview)} // Clean up memory
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Description*
                    </label>
                    <textarea
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Price ($)*
                    </label>
                    <input
                      name="price"
                      required
                      value={formData.price}
                      onChange={handleInputChange}
                      type="number"
                      step="0.01"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Stock Quantity
                    </label>
                    <input
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Category*
                    </label>
                    <input
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">
                      Brand
                    </label>
                    <input
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div className="md:col-span-2 flex items-center gap-2 py-2">
                    <input
                      name="isFeatured"
                      id="featured"
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={handleInputChange}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <label
                      htmlFor="featured"
                      className="text-sm font-bold text-slate-700 cursor-pointer"
                    >
                      Mark as Featured Product
                    </label>
                  </div>

                  <div className="md:col-span-2 flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setCreate_one(false)}
                      className="flex-1 px-6 py-3 rounded-2xl border-2 border-slate-100 text-slate-500 font-bold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 rounded-2xl bg-[#0052ff] text-white font-bold shadow-lg shadow-blue-200"
                    >
                      Publish Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {viewState ? <States /> : <Products />}
      </section>
      <BottomMenu />
    </div>
  );
}
