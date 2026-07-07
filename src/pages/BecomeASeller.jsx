import { useState } from "react";
import axios from "axios";
// import Logo from "../components/common/Logo";
import { useNavigate } from "react-router-dom";

export default function BecomeSeller() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // ✅ Added
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    whatsapp: "",
    shopName: "",
    address: "",
    deliveryZones: "",
    deliveryAvailable: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // ✅ Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ✅ Added validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!/^[6-9]\d{9}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Enter valid WhatsApp number";
    }

    if (!formData.shopName.trim()) {
      newErrors.shopName = "Shop name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.deliveryZones.trim()) {
      newErrors.deliveryZones = "Delivery zones are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    // ✅ Validation check
    const isValid = validateForm();

    if (!isValid) return;

    try {
      setLoading(true);

      const res = await axios.post("/api/seller/request", formData);

      if (res.data.success) {
        setSuccess(true);

        // 👉 WhatsApp message
        const message = `
Hi, I want to become a seller on your platform.

Shop Name: ${formData.shopName}
Owner Name: ${formData.ownerName}
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
Address: ${formData.address}
Delivery Zones: ${formData.deliveryZones}
Delivery Available: ${formData.deliveryAvailable}
        `;

        const url = `https://wa.me/91YOURNUMBER?text=${encodeURIComponent(
          message,
        )}`;

        window.open(url, "_blank");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50 min-h-screen relative pb-10">

      <div className="max-w-6xl mx-auto text-center mt-15">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3">
          Sell & Grow Faster
        </h2>

        <p className="text-sm text-gray-500">
          Trusted by 2,500+ sellers • ₹10Cr+ sales generated
        </p>

        <p className="text-gray-600 mt-6 max-w-xl mx-auto">
          Join our platform and reach thousands of customers instantly. No
          hassle, just growth.
        </p>

        {/* Steps */}
        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-600">
          <span>1. Apply</span>
          <span>→</span>
          <span>2. Verify</span>
          <span>→</span>
          <span>3. Start Selling</span>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-3xl mb-3">📈</div>

            <h3 className="font-semibold text-lg mb-2">
              Reach More Customers
            </h3>

            <p className="text-gray-500 text-sm">
              Access thousands of buyers actively searching for products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-3xl mb-3">⚙️</div>

            <h3 className="font-semibold text-lg mb-2">
              Easy Product Management
            </h3>

            <p className="text-gray-500 text-sm">
              Upload products, manage orders and track performance easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-3xl mb-3">🔒</div>

            <h3 className="font-semibold text-lg mb-2">
              Secure Payments
            </h3>

            <p className="text-gray-500 text-sm">
              Receive secure payments directly to your account.
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="mt-10 text-sm text-red-500 font-medium animate-pulse">
          ⚠ Sell Free for 6 Month
        </div>

        {/* CTA */}
        {!showForm && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowForm(true)}
              className="
                px-8 py-3 rounded-full 
                bg-blue-600 text-white font-semibold
                hover:bg-blue-700 
                active:scale-95 
                transition flex items-center gap-2
                shadow-lg
              "
            >
              🚀 Become a Seller
            </button>
          </div>
        )}

        {/* ✅ UPDATED FORM ONLY */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <form
              onSubmit={handleRequest}
              className="relative max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 text-left"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="
                  absolute top-4 right-4
                  w-10 h-10 rounded-full
                  bg-gray-100 hover:bg-gray-200
                  transition
                "
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">
                Seller Registration Form
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Owner Name */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Owner Name
                  </label>

                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Enter owner name"
                    className={`
                      w-full mt-2 border rounded-lg px-4 py-3 outline-none
                      ${
                        errors.ownerName
                          ? "border-red-500"
                          : "focus:ring-2 focus:ring-blue-500"
                      }
                    `}
                  />

                  {errors.ownerName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.ownerName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={`
                      w-full mt-2 border rounded-lg px-4 py-3 outline-none
                      ${
                        errors.phone
                          ? "border-red-500"
                          : "focus:ring-2 focus:ring-blue-500"
                      }
                    `}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    name="whatsapp"
                    maxLength={10}
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter WhatsApp number"
                    className={`
                      w-full mt-2 border rounded-lg px-4 py-3 outline-none
                      ${
                        errors.whatsapp
                          ? "border-red-500"
                          : "focus:ring-2 focus:ring-blue-500"
                      }
                    `}
                  />

                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Shop Name */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Shop Name
                  </label>

                  <input
                    type="text"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleChange}
                    placeholder="Enter shop name"
                    className={`
                      w-full mt-2 border rounded-lg px-4 py-3 outline-none
                      ${
                        errors.shopName
                          ? "border-red-500"
                          : "focus:ring-2 focus:ring-blue-500"
                      }
                    `}
                  />

                  {errors.shopName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.shopName}
                    </p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700">
                  Shop Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter full shop address"
                  className={`
                    w-full mt-2 border rounded-lg px-4 py-3 outline-none
                    ${
                      errors.address
                        ? "border-red-500"
                        : "focus:ring-2 focus:ring-blue-500"
                    }
                  `}
                />

                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Delivery Zones */}
              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700">
                  Delivery Zone Areas
                </label>

                <textarea
                  name="deliveryZones"
                  value={formData.deliveryZones}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Example: Park Street, Salt Lake, Dum Dum"
                  className={`
                    w-full mt-2 border rounded-lg px-4 py-3 outline-none
                    ${
                      errors.deliveryZones
                        ? "border-red-500"
                        : "focus:ring-2 focus:ring-blue-500"
                    }
                  `}
                />

                {errors.deliveryZones && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.deliveryZones}
                  </p>
                )}
              </div>

              {/* Delivery Available */}
              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700 block mb-3">
                  Delivery Available?
                </label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryAvailable"
                      value="yes"
                      checked={formData.deliveryAvailable === "yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryAvailable"
                      value="no"
                      checked={formData.deliveryAvailable === "no"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    px-8 py-3 rounded-full 
                    bg-blue-600 text-white font-semibold
                    hover:bg-blue-700 
                    active:scale-95 
                    transition flex items-center gap-2
                    shadow-lg
                  "
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Processing...
                    </>
                  ) : (
                    <>🚀 Submit Seller Request</>
                  )}
                </button>
              </div>

              {/* Success */}
              {success && (
                <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                  ✅ Request sent successfully! We&rsquo;ll contact you soon.
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="back absolute top-6 left-6">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="
            flex items-center gap-2 
            px-3 py-2 rounded-full 
            bg-white/80 backdrop-blur-md 
            shadow-md 
            hover:shadow-lg hover:-translate-y-0.5 
            active:scale-95 
            transition
          "
        >
          <span className="text-lg">←</span>

          <span className="text-sm font-medium text-gray-700">
            Back
          </span>
        </button>
      </div>
    </section>
  );
}