import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/add-product/AddProduct";
import MyCart from "../pages/my-cart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
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
