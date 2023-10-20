/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyCart = () => {
  const userData = useLoaderData();
  const [user, setUser] = useState(userData);

  if (!user?.cart?.length) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <h1 className="text-black text-2xl">Cart is empty</h1>
      </div>
    );
  }

  const handleRemove = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/removeItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          productId: id,
        }),
      });

      const data = await res.json();
      if (data) {
        toast.success("Product removed from your cart successfully");
        const res = await fetch(`http://localhost:5000/users/${user.uid}`);
        const data = await res.json();
        setUser(data);
      } else {
        toast.error("something is wrong, please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {user?.cart.map((product) => {
        return (
          <div
            key={product._id}
            className="card card-compact w-full bg-white text-black shadow-xl"
          >
            <figure>
              <img
                className="w-full h-[250px] object-cover"
                src={product.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="font-medium text-lg">
                Price: <span className="font-normal">{product.price}$</span>
              </p>
              <p className="font-medium text-lg">
                Category:{" "}
                <span className="font-normal capitalize">{product.type}</span>
              </p>
              <p className="font-medium text-lg">
                Brand:{" "}
                <span className="font-normal capitalize">{product.brand}</span>
              </p>
              <p className="font-medium text-lg">
                Ratings:{" "}
                <span className="font-normal capitalize inline-flex justify-center items-center gap-x-1">
                  {product.rating}
                  <AiFillStar className="text-lg text-secondary" />
                </span>
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleRemove(product._id)}
                  className="btn btn-primary"
                >
                  Remove form cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
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

export default MyCart;
