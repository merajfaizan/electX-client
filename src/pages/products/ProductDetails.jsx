/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();

  const handleCart = async () => {
    const uid = user.uid;
    const res = await fetch(`https://electricshop.vercel.app/users/${uid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (data) {
      toast.success("Product added to your cart successfully");
    } else {
      toast.error("something is wrong, please try again.");
    }
  };

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
      <button onClick={handleCart} className="btn mt-5 text-white block">
        Add to cart
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductDetails;
