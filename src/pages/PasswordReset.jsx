import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const PasswordReset = () => {
  const [send, setSend] = useState(false);
  const location = useLocation()
  const [email, setEmail] = useState(location.state?.email || "")
  const { passwordReset } = use(AuthContext);

  const passwordResetHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    passwordReset(email)
      .then(() => {
        e.target.reset();
        toast.success("Email send to your inbox");
        setTimeout(() => {
          window.open("https://mail.google.com/", "_blank");
        }, 1500);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    setSend(true);
  };

  return (
    <div className="card bg-color-secondary w-full max-w-sm shrink-0 shadow-2xl mx-auto margin-y ">
      <form onSubmit={passwordResetHandler} className="card-body">
        <h3 className="text-3xl font-bold text-center">Reset your password</h3>
        <p>Enter your registered email to reset your password.</p>
        <fieldset className="fieldset ">
          <label className="text-base text-black font-semibold">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
            placeholder="Enter your email"
          />

          <div className="flex flex-col items-center">
            <button
              disabled={send}
              type="submit"
              className={`  lg:w-1/2 lg:mx-0  rounded-full m-4 transition-all duration-100  ${
                send
                  ? "bg-gray-200 text-gray-500 px-4 py-2 text-lg font-semibold cursor-not-allowed"
                  : "mybtn border-2 "
              }`}
            >
              {send ? "Send" : `Send`}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default PasswordReset;
