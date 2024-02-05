import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ani from "../assets/img/supreme.jpg"

function ProductsDetails({products}) {
    const {id} = useParams();

    const product = products.find((product) => product.id === parseInt(id, 10));

    if (!product) {
        return <p>No product details available.</p>
    }

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        <p className="text-gray-500 mb-4">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p className="mb-4">{product.description}</p>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto max-h-96 object-cover mb-8"
        />
        <Link
          to="/products"
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Back To Products
        </Link>
      </div>
      <div className="w-full md:w-1/2 pt-2 flex items-center justify-center ">
        <img
          src={ani}
          alt={product.name}
          className="w-full md:max-w-full md:max-h-full max-h-96 object-contain"
        />
      </div>
    </div>
  );
}

export default ProductsDetails