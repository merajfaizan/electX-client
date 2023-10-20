/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    brand: "samsung",
    type: "phone",
    price: "",
    description: "",
    rating: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const res = await fetch("https://electricshop.vercel.app/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.status == 201) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      image: "",
      name: "",
      brand: "samsung",
      type: "phone",
      price: "",
      description: "",
      rating: "1",
    });
  };
  return (
    <div className="m-4 p-4 md:p-8 max-w-xl mx-auto border rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block text-gray-700">
            Image:
          </label>
          <input
            type="text"
            name="image"
            placeholder="https:/img.com"
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Apple MacBook , sony television, etc."
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          />
        </div>

        <div>
          <label htmlFor="brand" className="block text-gray-700">
            Brand Name:
          </label>
          <select
            name="brand"
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          >
            <option value="samsung">Samsung</option>
            <option value="apple">Apple</option>
            <option value="mi">MI</option>
            <option value="sony">Sony</option>
            <option value="lg">LG</option>
            <option value="dell">Dell</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block text-gray-700">
            Type:
          </label>
          <select
            name="type"
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="television">Television</option>
            <option value="refrigerator">Refrigerator</option>
            <option value="ac">AC</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700">
            Price:
          </label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">
            Short Description:
          </label>
          <textarea
            name="description"
            rows="4"
            required
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm outline-none"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-gray-700">
            Rating:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              name="rating"
              min="1"
              max="5"
              step="0.5"
              required
              onChange={handleChange}
              value={formData.rating || 1}
              className="w-full"
            />
            <p className="text-center w-5 rounded-full bg-accent text-white px-4 inline-flex justify-center items-center font-semibold">
              {formData.rating || 1}
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Add Product
          </button>
        </div>
      </form>
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

export default AddProduct;
