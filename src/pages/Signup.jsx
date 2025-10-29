import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const signupHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      if (password.length < 6) {
        setErr("Password must be at least 6 characters long.");
        return;
      }
      if (!/[A-Z]/.test(password)) {
        setErr("Password must contain at least one uppercase letter (A–Z).");
        return;
      }
      if (!/[a-z]/.test(password)) {
        setErr("Password must contain at least one lowercase letter (a–z).");
        return;
      }
    }

    setErr("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            form.reset();
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
            toast.error(
              error.message || "Something went wrong. Please try again."
            );
          });
        toast.success("SignUp Successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Try logging in instead."
          );
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address. Please check and try again.");
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "Password is too weak. Use at least 6 characters with a upperCase and a lowerCase letters and numbers."
          );
        } else if (error.code === "auth/missing-password") {
          toast.error("Please enter a password before proceeding.");
        } else if (error.code === "auth/user-not-found") {
          toast.error(
            "No account found with this email. Please sign up first."
          );
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many failed attempts. Please try again later.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in popup was closed before completion.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("This sign-in method is not enabled in Firebase.");
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
        toast.success("SignUp successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Please try again.");
      });
  };

  return (
    <div data-aos="fade-up" className="p-4">
      <div className="card bg-color-secondary text-secondary w-full margin-y max-w-sm shrink-0 shadow-2xl md:mx-auto">
        <form onSubmit={signupHandler} className="card-body">
          <h3 className="text-3xl font-bold text-center">SignUp Now</h3>
          <fieldset className="fieldset ">
            {/* name */}
            <label className="label text-base text-secondary font-semibold">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
              placeholder="Enter Your Name"
            />
            {/* photoUrl */}
            <label className="label text-base text-secondary font-semibold">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
              placeholder="Enter Your Photo URL"
            />
            {/* email */}
            <label className="label text-base text-secondary font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
              required
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
            <div className="mt-2 text-red-700">{err}</div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="mybtn bg-black w-full border-2 border-black mt-4"
              >
                SignUp
              </button>
            </div>
            <p className="text-center text-base">or</p>
            <div className="flex flex-col items-center">
              <button
                onClick={googleSignInHandler}
                className="flex items-center justify-center gap-2 rounded-full cursor-pointer active:scale-98 px-4 py-2 text-lg font-semibold bg-white w-full border-2 border-black"
              >
                <FcGoogle size={24} /> <span>SignUp with Google</span>
              </button>
            </div>
            <p className="mt-2 text-center text-base">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline text-primary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
