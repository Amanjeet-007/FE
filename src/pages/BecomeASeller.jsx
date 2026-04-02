import { useState } from "react";
import axios from "axios";

export default function BecomeSeller() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRequest = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/seller/request");

      if (res.data.success) {
        setSuccess(true);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-linear-to-b from-white to-gray-50">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-4">
          Become a Seller
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Start selling your products to thousands of customers and grow
          your business with our platform.
        </p>


        {/* BENEFITS */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Reach More Customers
            </h3>
            <p className="text-gray-500 text-sm">
              Access thousands of buyers actively searching for products.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Easy Product Management
            </h3>
            <p className="text-gray-500 text-sm">
              Upload products, manage orders and track performance easily.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-500 text-sm">
              Receive secure payments directly to your account.
            </p>
          </div>

        </div>


        {/* CTA */}

        <div className="flex justify-center">

          <button
            onClick={handleRequest}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Sending Request..." : "Request Seller Access"}
          </button>

        </div>

        {success && (
          <p className="text-center text-green-600 mt-4">
            Your request has been sent. We will verify and approve you soon.
          </p>
        )}

      </div>

    </section>
  );
}