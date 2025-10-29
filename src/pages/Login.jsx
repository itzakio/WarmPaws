import React, { use, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [show, setShow] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const { logIn, googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = emailValue;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged In Successfully!");
        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address. Please check and try again.");
        } else if (error.code === "auth/missing-password") {
          toast.error("Please enter your password to continue.");
        } else if (error.code === "auth/user-not-found") {
          toast.error(
            "No account found with this email. Please sign up first."
          );
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error(
            "This email is not registered or the password is incorrect."
          );
        } else if (error.code === "auth/too-many-requests") {
          toast.error(
            "Too many failed attempts. Try again later or reset your password."
          );
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in popup was closed before completion.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error(
            "This sign-in method is currently disabled. Please contact support."
          );
        } else {
          toast.error(
            error.message || "Something went wrong. Please try again."
          );
        }
      });
  };

  const googleSignInHandler = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged In Successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Please try again.");
      });
  };

  return (
    <div data-aos="fade-up" className="p-4 ">
      <div className=" card bg-color-secondary text-secondary w-full margin-y max-w-sm shrink-0 shadow-2xl md:mx-auto">
        <form onSubmit={loginHandler} className="card-body">
          <h3 className="text-3xl font-bold text-center">Login Now</h3>
          <fieldset className="fieldset ">
            {/* email */}
            <label className="text-base label text-secondary font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
              required
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Enter Your Email"
            />
            {/* password */}
            <label className="label text-base text-secondary font-semibold">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
                required
                placeholder="Enter Your Password"
              />
              <p
                onClick={() => setShow(!show)}
                className="absolute right-4 top-4 z-99"
              >
                {show ? <HiEye size={20} /> : <HiEyeOff size={20} />}
              </p>
            </div>
            <div className="mt-2">
              <Link
                state={{ email: emailValue || "" }}
                to="/reset-password"
                className="link link-hover text-base"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="mybtn bg-black w-full border-2 border-black mt-4"
              >
                Login
              </button>
            </div>
            <p className="text-center text-base">or</p>
            <div className="flex flex-col items-center">
              <button
                onClick={googleSignInHandler}
                className="flex items-center justify-center gap-2 rounded-full cursor-pointer active:scale-98 px-4 py-2 text-lg font-semibold bg-white w-full border-2 border-black"
              >
                <FcGoogle size={24} /> <span>Login with Google</span>
              </button>
            </div>
            <p className="mt-2 text-center text-base">
              Don't have an account?{" "}
              <Link
                state={location.state}
                to="/signup"
                className="hover:underline text-primary "
              >
                SignUp
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
