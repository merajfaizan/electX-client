/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import banner1 from "../../assets/images/banners/Samsung_Banner.jpg";
import banner2 from "../../assets/images/banners/gadget_sale_Banner.jpg";
import banner3 from "../../assets/images/banners/Samsung_Refrigerator_Banner.jpg";
import banner4 from "../../assets/images/banners/Smart_Offer__banner.jpg";

const Products = () => {
  const products = useLoaderData();

  if (!products?.length) {
    return (
      <div className="h-[60vh] flex justify-center items-center text-black font-semibold text-xl">
        Sorry, There is no Product for this brand.
      </div>
    );
  }

  return (
    <div className="py-4">
      {/* carousel of banners */}
      <div className="carousel w-full my-2 rounded">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => {
          return (
            <div
              className="text-black shadow-xl p-4 rounded-md flex flex-col justify-between"
              key={product._id}
            >
              <div>
                <img
                  className="w-full h-80 object-cover"
                  src={product.image}
                  alt="product-image"
                />
                <h2 className="text-2xl font-semibold my-3">{product.name}</h2>
                <p className="my-2">
                  <span className="font-medium">Price: </span> {product.price}$
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
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  to={`/product/${product._id}`}
                  className="btn text-white flex-grow"
                >
                  Details
                </Link>
                <Link
                  to={`/product`}
                  className="btn btn-outline text-black flex-grow"
                >
                  Update
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
