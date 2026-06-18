//* eslint-disable react-hooks/exhaustive-deps */
//* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// try idea to avoid the double data fetching (search suggestion and here) cause both returning the same products suggestion[p,pro,prod]-> prod (search(prod)->return all prod)here

import Navbar from "../components/layout/Navbar";
import { useParams } from "react-router-dom";
import { searchResult } from "../Api/product";
import { useState, useEffect } from "react";

export default function Searched() {
  const [products, setProducts] = useState([]); 
  const { productname } = useParams();

    async function getproduct() {
      try {
        const res = await searchResult(productname);
        setProducts(res);
        return res
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getproduct();

  return (
    <div className="min-h-screen min-w-screen">
      <Navbar filter={false} />
      <div className="bg-red-500 h-screen w-full pt-40">

      <p>asdfasdfasd</p>
      {/* Example of rendering the data once it loads */}
      <div className="p-4">
        {products.length > 0 ? (
          products.map((product) => <p key={product.id}>
            {product.price} <br />
            {product.name}
            </p>)
        ) : (
          <p>No products found.</p>
        )}
      </div>
      </div>
    </div>
  );
}