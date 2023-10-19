/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const Login = () => {
  const { googleLoginProvider, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //  google User Create
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleLoginProvider(googleProvider)
      .then((result) => {
        const detaileduser = result.user;
        const user = {
          uid: detaileduser.uid,
          displayName: detaileduser.displayName,
          photoURL: detaileduser.photoURL,
          email: detaileduser.email,
          cart: [],
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Good job!", "Successfully Logged In", "success");
              navigate(from, { replace: true });
            } else {
              toast.error("something is wrong, please try again.");
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        toast.error(errorMessage[1]);
      });
  };

  //  login with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email, password)
      .then((result) => {
        swal("Good job!", "Successfully Logged In", "success");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        toast.error(errorMessage[1]);
      });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-black font-semibold text-center mt-5 mb-10">
        Login
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <img
          className="hidden lg:block w-full h-full object-cover mt-20"
          src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
          alt=""
        />
        <form
          onSubmit={handleSubmit}
          className="p-5 mx-auto shadow-xl rounded-lg border h-max text-black"
        >
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn text-white w-full font-semibold rounded-lg py-2.5 text-center mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-accent font-semibold text-lg w-full rounded py-2"
          >
            Submit
          </button>
          <Link className="mt-5 inline-block" to={"/register"}>
            Don&apos;t have an account?{" "}
            <span className="underline">click here to Register</span>
          </Link>
        </form>
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

export default Login;
