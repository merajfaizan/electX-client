/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
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
    <div
      className="text-black shadow-xl p-4 rounded-md flex flex-col justify-between"
      key={product?._id}
    >
      <div className="flex-grow">
        <img
          className="w-full h-80 object-cover"
          src={product?.image}
          alt="product-image"
        />
        <h2 className="text-2xl font-semibold my-3">{product?.name}</h2>
        <p className="my-2">
          <span className="font-medium">Price: </span> {product?.price}$
        </p>
        <p className="my-2 capitalize">
          <span className="font-medium">Category: </span> {product?.type}
        </p>
        <p className="my-2 capitalize">
          <span className="font-medium">Brand: </span> {product?.brand}
        </p>
        <p className="my-2 capitalize inline-flex justify-center items-center gap-1">
          <span className="font-medium">Rating: </span> {product?.rating}
          <AiFillStar className="text-lg text-secondary" />
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <Link
          to={`/product/${product?._id}`}
          className="btn text-white flex-grow"
        >
          Details
        </Link>
        <button onClick={handleCart} className="btn text-white flex-grow">
          Add to cart
        </button>
      </div>
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

export default ProductCard;
