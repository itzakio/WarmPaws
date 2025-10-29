import React, { useState } from "react";
import toast from "react-hot-toast";

const BookServiceFrom = () => {

    const [booked, setBooked] = useState(false);
      const isBooked = (e) => {
        e.preventDefault()
        const form = e.target
        form.reset()
        toast.success("Service Booked Successfully!");
        setBooked(true);
      };
    
  return (
    <div data-aos="fade-up" data-aos-delay={800} className="card bg-color-secondary w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
      <form onSubmit={isBooked} className="card-body">
        <fieldset className="fieldset ">
          <label className="label text-black font-semibold">Name</label>
          <input type="text" className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"  required placeholder="Name" />
          <label className="label text-black font-semibold">Email</label>
          <input type="email" className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"  required placeholder="Email" />
          
         
          <div className="flex flex-col items-center">
            <button
          disabled={booked}
        //   onClick={() => isBooked()}
          className={`  lg:w-1/2 lg:mx-0  rounded-full m-4 transition-all duration-100  ${
            booked
              ? "bg-gray-200 text-gray-500 px-4 py-2 text-lg font-semibold cursor-not-allowed"
              : "mybtn border-2 "
          }`}
        >
          {booked ? "Booked" : `Book Now`}
        </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BookServiceFrom;
