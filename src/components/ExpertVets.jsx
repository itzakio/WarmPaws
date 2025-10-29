import React from "react";
import useFetchData from "../hooks/useFetchData";
import Loading from "./Loading";
import ExpertVetCard from "./ExpertVetCard";

const ExpertVets = () => {
  const { data: vets, loading, error } = useFetchData("/vets.json");
  return (
    <section className="margin-bottom">
      <div className="margin-y text-center">
        <h2 data-aos="fade-up" className=" signika-font headline">Meet Our
          <span className="text-primary signika-font"> Expert </span> 
          Vets
        </h2>
        <p data-aos="fade-up" data-aos-delay={100} className="text-sub mt-2">
          Caring hands and experienced hearts behind your pet’s health.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3  gap-16 place-items-center p-8">
        {loading ? (
          <div className="col-span-full">
            {" "}
            <Loading />
          </div>
        ) : (
          vets.map((vet, idx) => (
            <ExpertVetCard key={vet.id} idx={idx} vet={vet} />
          ))
        )}
      </div>
    </section>
  );
};
export default ExpertVets;
