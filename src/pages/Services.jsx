import React from "react";
import Loading from "../components/Loading";
import ServiceCard from "../components/ServiceCard";
import useFetchData from "../hooks/useFetchData";

const Services = () => {
    const { data:services, loading, error } = useFetchData("/services.json");
  return (
    <section className="margin-bottom" >
      <div className="flex justify-center">
        <h2 data-aos="fade-up" className="margin-y signika-font headline">
          <span className="text-primary signika-font">Popular</span> Winter
          Care Services
        </h2>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center p-8">
        {loading ? (
          <div className="col-span-full">
            <Loading />
          </div>
        ) : (
          services.map((service, idx) => (
            <ServiceCard idx={idx} key={service.serviceId} service={service} />
          ))
        )}
      </div>
    </section>
  );
};

export default Services;
