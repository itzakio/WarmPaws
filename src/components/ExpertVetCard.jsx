import React from "react";

const ExpertVetCard = ({ vet, idx }) => {
  return (
    <div
      key={vet.id}
      data-aos="zoom-in"
      data-aos-delay={idx * 100}
      className="group relative w-full h-130 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 "
    >
      <div className="overflow-hidden">
        <img
          src={vet.image}
          alt={vet.name}
          className="w-full h-148  object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute space-y-2 bottom-0 xl:-bottom-30 group-hover:bottom-0 left-0 right-0 bg-background backdrop-blur-md h-52 py-3 px-6 text-center transition-all duration-300">
        <h4 className="text-primary text-xl  font-semibold">{vet.name}</h4>
        <p className=" font-semibold text-gray-700">{vet.title}</p>
        <p className="text-sm mt-8 text-gray-500">{vet.description}</p>
      </div>
    </div>
  );
};

export default ExpertVetCard;
