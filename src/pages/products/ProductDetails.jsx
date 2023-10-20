/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="text-black" key={product._id}>
      <img
        className="w-full h-[70vh] object-contain"
        src={product.image}
        alt="product-image"
      />
      <h2 className="text-2xl font-semibold my-3">{product.name}</h2>
      <p className="my-2">
        <span className="font-semibold text-lg">Details: </span>
        <span className="text-xl"> {product.description}</span>
      </p>
      <p className="my-2">
        <span className="font-semibold text-lg">Price: </span>
        <span className="font-medium">{product.price}$</span>
      </p>
      <p className="my-2 capitalize">
        <span className="font-medium">Category: </span> {product.type}
      </p>
      <p className="my-2 capitalize">
        <span className="font-medium">Brand: </span> {product.brand}
      </p>
      <p className="my-2 capitalize inline-flex justify-center items-center gap-1">
        <span className="font-medium">Rating: </span> {product.rating}
        <AiFillStar className="text-lg text-secondary" />
      </p>
      <button className="btn mt-5 text-white block">Add to cart</button>
    </div>
  );
};

export default ProductDetails;
