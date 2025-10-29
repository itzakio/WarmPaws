import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";
import useFetchData from "../hooks/useFetchData";
import WinterTips from "../components/WinterTips";
import ExpertVets from "../components/ExpertVets";
import CustomerReviews from "../components/CustomerReviews";
import BookAnAppointment from "../components/BookAnAppointment";

const Home = () => {
  const { data:services , loading, error } = useFetchData("/services.json");
  if(loading){
    return <Loading/>
  }

  return (
    <section className="">
      <Banner />
      
      <div  className="margin-y text-center">
        <h2 data-aos="fade-up"  className=" signika-font headline">
          <span  className="text-primary signika-font">Popular</span> Winter
          Care Services
        </h2>
        <p data-aos="fade-up" data-aos-delay={100} className="text-sub mt-2">
          Keep your furry friends happy, healthy, and cozy all winter long with our expert seasonal pet care.
        </p>
      </div>
      <div className="max-w-[1440px] margin-bottom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center p-8 margin-bottom">
        {loading ? (
         <div className="col-span-full"> <Loading  /></div>
        ) : (
          services.map((service, idx) => (
            <ServiceCard idx={idx} key={service.serviceId} service={service} />
          ))
        )}
      </div>
      <WinterTips/>
      <ExpertVets/>
      <BookAnAppointment/>
      <CustomerReviews/>
    </section>
  );
};

export default Home;
