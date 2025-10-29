import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service, idx }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={idx * 100} className="relative w-full rounded-xl bg-amber-300 overflow-hidden">
      <img className=" w-full hover:scale-110 transition-transform duration-500 " src={service.image} alt="" />
      <div className="absolute -top-4 -right-4 p-4 bg-green-50 rounded-full">
        <Link to={`/service-details/${service.serviceId}`} ><button className="mybtn">View Details</button></Link>
      </div>
      <div className="absolute bottom-5 px-4  w-full">
        <div className="text-white space-y-2 rounded-xl bg-black/50 p-4">
          <h2 className=" signika-font text-2xl font-semibold">
            {service.serviceName}
          </h2>
          <div className="flex items-center justify-between">
            <div className="px-2 py-1 rounded-full w-fit text-xs bg-color-primary flex gap-1 font-medium">
              <FaRegStar />
              <span>{service.rating}</span>
            </div>
            <p>${service.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
