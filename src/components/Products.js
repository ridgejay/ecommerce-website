import React from "react";
import PremeTwo from "../assets/img/preme2.jpg";
import Han from "../assets/img/han.jpg";
import Preme from "../assets/img/preme.jpg";
import { Link } from "react-router-dom";
import "./Products.css";

function Products({ products, addToCart }) {
  return (
    <div className="min-h-screen flex flex-col">
      <section className=" flex flex-wrap justify-center">
        <div className="w-full sm:w-1/3 flex justify-start">
          <img src={Preme} alt="product banner" className="h-5/6" />
        </div>
        <div className="w-full sm:w-1/3 flex justify-center mt-10 ">
          <div className="flex flex-col justify-center">
           {/*} <img src={Han} alt="han" className="h-1/3 pt-2" /> */}

            <h2 className="title underline decoration-red-500 text-center">Our Kickz</h2>
            <img className="pt-4 px-9" src={Han} alt="product banner"/>
          </div>
        </div>
        
        <div className="w-full sm:w-1/3 flex justify-end">
          <img src={PremeTwo} alt="product banner" className="h-5/6 " />
        </div>
      </section>

      {/* Product grid */}
      <section className="p-2">
        <div className="flex flex-wrap mx-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
            >
              <div className="bg-white rounded shadow ">
                <img src={product.image} alt={product.name} className="mb-4" />
                <h2 className="text-lg font-semibold p-2">{product.name}</h2>
                <p className="text-gray-500 p-2">{product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 mx-2 bg-gray-800 hover:bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="block mt-2 text-blue-500 p-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
