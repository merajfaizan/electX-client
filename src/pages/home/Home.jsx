/* eslint-disable no-unused-vars */
import React from "react";
import banner1 from "../../assets/images/banners/Samsung_Banner.jpg";
import banner2 from "../../assets/images/banners/gadget_sale_Banner.jpg";
import banner3 from "../../assets/images/banners/Samsung_Refrigerator_Banner.jpg";
import banner4 from "../../assets/images/banners/Smart_Offer__banner.jpg";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

const Home = () => {
  const products = useLoaderData();
  const deals = products.slice(5, 8);
  const brands = [
    {
      id: 1,
      name: "Samsung",
      image: "https://download.logo.wine/logo/Samsung/Samsung-Logo.wine.png",
    },
    {
      id: 2,
      name: "Apple",
      image:
        "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png",
    },
    {
      id: 3,
      name: "MI",
      image:
        "https://download.logo.wine/logo/Xiaomi_Mi_1/Xiaomi_Mi_1-Logo.wine.png",
    },
    {
      id: 4,
      name: "Sony",
      image: "https://download.logo.wine/logo/Sony/Sony-Logo.wine.png",
    },
    {
      id: 5,
      name: "LG",
      image:
        "https://download.logo.wine/logo/LG_Corporation/LG_Corporation-Logo.wine.png",
    },
    {
      id: 6,
      name: "Dell",
      image: "https://download.logo.wine/logo/Dell/Dell-Logo.wine.png",
    },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {brands?.map((brand, index) => {
          const brandName = brand.name.toLocaleLowerCase();
          return (
            <Link key={index} to={`/products/${brandName}`}>
              <div
                key={brand.name}
                className="card w-full h-[300px] bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="w-full h-full object-cover"
                    src={brand.image}
                    alt="brand-image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-black font-semibold">
                    {brand.name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Hot Deals of today */}
      <div className="pt-5 text-black">
        <div>
          <h1 className="text-5xl font-semibold py-10">Deals Of The Day</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deals?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      {/* latest products */}
      <div className="pt-5 text-black">
        <div>
          <h1 className="text-5xl font-semibold py-10">Latest Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
