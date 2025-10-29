
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { MdEventAvailable } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import BookServiceFrom from "../components/BookServiceFrom";
import useFetchData from "../hooks/useFetchData";

const ServiceDetails = () => {


  const {id} = useParams()
 
  const { data:services, loading, error } = useFetchData("/services.json");

  if(loading){
    return <Loading/>
  }

  const service = services.find(singleService => singleService.serviceId == id)


  const { serviceName, providerName, providerEmail, category, description, image, price, rating, slotsAvailable} = service;

  return (
    <div className="max-w-[1440px] margin-top margin-bottom mx-auto flex flex-col xl:flex-row gap-10 px-4 lg:px-8">
     
        <img data-aos="fade-up" className="mx-auto w-full md:w-2/3 xl:w-1/3 rounded-xl " src={image} alt="" />
     
      <div className="flex-1 margin-top margin-bottom flex flex-col space-y-5 justify-between">
        <div className="text-center lg:text-left">
          <h1 data-aos="fade-up" data-aos-delay={100} className="text-3xl text-secondary md:text-4xl lg:text-5xl xl:text-6xl font-bold signika-font">{serviceName}</h1>
          <p data-aos="fade-up" data-aos-delay={200} className="text-sub">
            Provider: <span className="text-primary  md:text-lg">{providerName}</span>
          </p>
          <p data-aos="fade-up" data-aos-delay={300} className="text-sub">
            Category: <span className="text-secondary text-lg">{category}</span>
          </p>
          <p data-aos="fade-up" data-aos-delay={300} className="text-sub">
            Email: <span className="text-secondary text-lg">{providerEmail}</span>
          </p>
        </div>

        <p data-aos="fade-up" data-aos-delay={400} className="text-center text-sub lg:text-left lg:text-3xl font-semibold">
            {description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          <div data-aos="fade-up" data-aos-delay={500} className="flex flex-col items-center lg:items-start">
            <FaStar className="text-primary" size={50} />
            <p className="text-gray-500">Service Rating</p>
            <p className="text-4xl text-secondary font-extrabold">{rating}</p>
          </div>
          <div data-aos="fade-up" data-aos-delay={600} className="flex flex-col items-center lg:items-start">
            <MdEventAvailable className="text-primary" size={50} />
            <p className="text-gray-500">Slots Available</p>
            <p className="text-4xl text-secondary font-extrabold">{slotsAvailable}</p>
          </div>
          <div data-aos="fade-up" data-aos-delay={700} className="flex flex-col items-center lg:items-start">
            <IoMdPricetags className="text-primary" size={50}/>
            <p className="text-gray-500">Service Price</p>
            <p className="text-4xl text-secondary font-extrabold">${price}</p>
          </div>
        </div>

        <BookServiceFrom/>
        </div>

        
      </div>
    </div>
  );
};

export default ServiceDetails;
