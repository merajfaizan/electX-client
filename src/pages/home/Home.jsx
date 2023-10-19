/* eslint-disable no-unused-vars */
import React from "react";
import banner1 from "../../assets/images/banners/Samsung_Banner.jpg";
import banner2 from "../../assets/images/banners/gadget_sale_Banner.jpg";
import banner3 from "../../assets/images/banners/Samsung_Refrigerator_Banner.jpg";
import banner4 from "../../assets/images/banners/Smart_Offer__banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="rounded">
      {/* carousel of banners */}
      <div className="carousel w-full my-2 rounded">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
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
          <img src={banner2} className="w-full" />
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
      {/* 6 types of brands category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/Samsung/Samsung-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">Samsung</h2>
            </div>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">Apple</h2>
            </div>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/Xiaomi_Mi_1/Xiaomi_Mi_1-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">MI</h2>
            </div>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/Sony/Sony-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">Sony</h2>
            </div>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/LG_Corporation/LG_Corporation-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">LG</h2>
            </div>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-full object-cover"
                src="https://download.logo.wine/logo/Dell/Dell-Logo.wine.png"
                alt="brand-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-semibold">Dell</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
