//* eslint-disable react-hooks/exhaustive-deps */
//* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import BottomMenu from "../components/layout/BottomMenu";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";
import { allProducts } from "../Api/shop";
import { Link } from "react-router-dom";

export default function Store() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const products = await allProducts();
      setProducts(products);
    }
    getProduct()

  }, []);

  return (
    <>
      <Navbar />
      <div className="All grid-cols-2  grid self-center md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20 mten">
        {Products.length === 0
          ? 
          <>
          <h3 className="text-white text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">There is not any Product</h3>
          <p>Become a Seller <Link to={'/request'}>Here</Link></p>
          </>
          : Products.map((el, i) => {
              return <ProductCard product={el} key={i} />;
            })}
      </div>
      <BottomMenu />
    </>
  );
}
