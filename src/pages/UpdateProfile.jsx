import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const [update, setUpdate] = useState(false);
  const {user, updateUser, setUser,setUserLoading} = use(AuthContext)
  const navigate = useNavigate()

  const updateHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim()
    const photo = form.photo.value.trim()

    const updatedName = name.length < 1? user.displayName:name;
    const updatedPhoto = photo.length < 1? user.photoURL:photo;

    updateUser({ displayName: updatedName, photoURL: updatedPhoto })
    .then(() => {
            setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
            toast.success("Profile Updated")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setUser(user)
            toast.error(errorMessage);
          });

    form.reset();
    setUpdate(true);
    setUserLoading(true)
    navigate("/my-profile")
  };

  return (
    <div data-aos="fade-up" className="card text-secondary bg-color-secondary w-full max-w-sm shrink-0 shadow-2xl mx-auto margin-y ">
      <form onSubmit={updateHandler} className="card-body">
        <h3 className="text-3xl font-bold text-center">Update your profile</h3>
        <fieldset className="fieldset ">
          <label className="label text-secondary font-semibold">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
            placeholder="Name"
          />
          <label className="label text-secondary font-semibold">Photo URL</label>
          <input
            name="photo"
            type="text"
            className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
            placeholder="Photo URL"
          />

          <div className="flex flex-col items-center">
            <button
              disabled={update}
              type="submit"
              className={`  lg:w-1/2 lg:mx-0  rounded-full m-4 transition-all duration-100  ${
                update
                  ? "bg-gray-200 text-gray-500 px-4 py-2 text-lg font-semibold cursor-not-allowed"
                  : "mybtn border-2 "
              }`}
            >
              {update ? "Updated" : `Update`}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateProfile;
