import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, idx }) => {
  const { name, image, date, rating, description } = review;

  return (
    <div className="bg-white mx-5 min-h-52 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 gap-4 flex flex-col xl:flex-row items-center ">
      <img
        src={image}
        alt={name}
        className="size-28 shrink-0 rounded-full object-cover border-2 border-orange-500"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{new Date(date).toDateString()}</p>
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-xl ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
