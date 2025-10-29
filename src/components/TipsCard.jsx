import React from "react";

const TipsCard = ({ tip, idx }) => {
  return (

    <div
      data-aos="fade-up" 
      data-aos-delay={idx * 100}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer w-70 h-96 mx-auto transition-all duration-300 "
    >
      <img
        src={tip.image}
        alt={tip.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>

      <div className="px-2 relative z-10 flex flex-col justify-end h-full p-5 text-white transition-all duration-500">
        <h3 className="text-2xl xl:opacity-100 xl:group-hover:opacity-0 font-semibold mb-2 absolute bottom-16 xl:bottom-2 transition-all duration-300">
          {tip.title}
        </h3>

        <p className="text-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {tip.description}
        </p>

        <button className="mt-3 w-52 mx-auto xl:opacity-0 xl:group-hover:opacity-100 transition-all duration-600 mybtn">
          Learn More
        </button>
      </div>
    </div>

  );
};

export default TipsCard;
