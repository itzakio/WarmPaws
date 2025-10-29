import React, { use } from "react";
import { CgProfile } from "react-icons/cg";
import { RiHome4Line, RiServiceLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import logoBlack from "/logo-black.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Please try again.");
      });
  };

  const links = (
    <>
      <NavLink className="navLinks" to="/">
        <RiHome4Line />
        Home
      </NavLink>
      <NavLink className="navLinks" to="/services">
        <RiServiceLine /> Services
      </NavLink>
      <NavLink className="navLinks" to="/my-profile">
        <CgProfile />
        My Profile
      </NavLink>
    </>
  );
  return (
    <nav className="bg-color-secondary text-secondary">
      <div className="navbar z-999  max-w-[1440px] mx-auto px-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu space-y-4 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-1 items-center">
            <img className="size-12" src={logoBlack} alt="" />
            <div className="hidden md:block">
              <h3 className="text-xl text-primary font-semibold signika-font">
                WarmPaws
              </h3>
              <p className="text-xs text-gray-500">
                Your pet’s second favorite home.
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="signika-font menu menu-horizontal px-1 flex gap-4 signika-font">
            {links}
            {/* main links */}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <Link to="/my-profile">
            {user ? (
              <img
                title={user.displayName}
                className="size-10 object-cover rounded-full border"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <CgProfile size={38} />
            )}
          </Link>

          {user ? (
            <div>
              <button onClick={logOutHandler} className="mybtn hidden md:block">
                LogOut
              </button>
              <button onClick={logOutHandler} className="mybtn md:hidden">
                <TbLogout size={24} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="mybtn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
