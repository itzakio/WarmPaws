import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BookAnAppointment = () => {
  const [booked, setBooked] = useState(false);
  const isBooked = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
    toast.success("Appointment Booked Successfully!");
    setBooked(true);
  };

  const [selectedDate, setSelectedDate] = useState("");

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // next day
    const formatted = today.toISOString().split("T")[0];
    setMinDate(formatted);
  }, []);

  return (
    <section className="margin-bottom p-4">
      <div className="margin-y text-center">
        <h2 data-aos="fade-up" className=" signika-font headline">
          Plan a<span className="text-primary signika-font"> Visit </span>with
          Our Experts
        </h2>
        <p data-aos="fade-up" data-aos-delay={100} className="text-sub mt-2">
          Book an Appointment That Fits Your Schedule.
        </p>
      </div>

      {/* form section */}
      <div
        data-aos="fade-up"
        data-aos-delay={800}
        className="card bg-color-secondary w-full max-w-4xl shadow-2xl mx-auto"
      >
        <form onSubmit={isBooked} className="card-body">
          <fieldset className="fieldset p-4 lg:p-8 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* name */}
              <div className="space-y-2">
                <label className="label text-base text-black font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
                  required
                  placeholder="Name"
                />
              </div>
              {/* phone number */}
              <div className="space-y-2">
                <label className="label text-base text-black font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* pet name */}
              <div className="space-y-2">
                <label className="label text-base text-black font-semibold">
                  Pet Name
                </label>
                <input
                  type="text"
                  className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
                  required
                  placeholder="Enter your pet name"
                />
              </div>
              {/* service */}
              <div className="space-y-2">
                <label className="label text-base text-black font-semibold">
                  Select Service
                </label>
                <select
                  name="service"
                  required
                  className="input w-full rounded-full  h-12 text-base"
                >
                  <option selected value="">
                    Select an Service
                  </option>
                  <option value="">Winter Care</option>
                  <option value="">Pet Boarding / Daycare</option>
                  <option value="">Dog Walking</option>
                  <option value="">Pet Nutrition & Feeding</option>
                  <option value="">Pet Training & Behavior Coaching</option>
                </select>
              </div>
            </div>
            {/* date */}
            <div className="grid grid-cols-1 space-y-2">
              <label className="label text-base text-black font-semibold">
                Select Appointment Date
              </label>

              <input
                type="date"
                id="date"
                name="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDate}
                className="input w-full rounded-full placeholder:text-gray-500 h-12 text-base"
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                disabled={booked}
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
    </section>
  );
};
export default BookAnAppointment;
