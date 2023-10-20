import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/add-product/AddProduct";
import MyCart from "../pages/my-cart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import UpdateProduct from "../pages/update-product/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          await fetch(`https://electricshop.vercel.app/products`),
      },
      {
        path: "/products/:brand",
        element: <Products />,
        loader: async ({ params }) =>
          await fetch(
            `https://electricshop.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`https://electricshop.vercel.app/product/${params.id}`),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`https://electricshop.vercel.app/product/${params.id}`),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart/:uid",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`https://electricshop.vercel.app/users/${params.uid}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
