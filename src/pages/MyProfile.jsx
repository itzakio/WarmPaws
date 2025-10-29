import React, { use } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Link } from "react-router";

const MyProfile = () => {
  const { user, userLoading } = use(AuthContext);

  if (userLoading) {
    return <Loading />;
  }
  return (
    <div data-aos="fade-up" className="mx-4">
      <div className="max-w-96 text-secondary space-y-4 bg-color-secondary rounded-xl flex flex-col items-center p-12 mx-auto margin-y">
        <div className="border-2 size-38 lg:size-48 rounded-full object-cover bg-green-50 overflow-hidden">
          <img className="w-full object-cover" src={user.photoURL && user.photoURL} alt="" />
        </div>
        <h1 className="text-2xl font-semibold"> {user && user.displayName}</h1>
        <p className="text-lg font-medium">{user && user.email}</p>
        <Link
          to="/my-profile/update-profile"
          className="mybtn border-2 flex items-center gap-2"
        >
          <FaUserEdit size={24} /> Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
