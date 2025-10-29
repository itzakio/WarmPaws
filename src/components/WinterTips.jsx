import useFetchData from "../hooks/useFetchData";
import Loading from "./Loading";
import TipsCard from "./TipsCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const WinterTips = () => {
  const { data: tips, loading, error } = useFetchData("/tips.json");
  return (
    <section className="margin-bottom">
      <div  className="margin-y text-center">
        <h2 data-aos="fade-up"  className=" signika-font headline">Winter
          <span  className="text-primary signika-font"> Care Tips </span> 
          for Pets
        </h2>
        <p data-aos="fade-up" data-aos-delay={100} className="text-sub mt-2">
          Keep your furry friends warm, healthy, and happy this winter.
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 place-items-center">
        <div className=" w-full margin-bottom overflow-hidden mx-auto col-span-full">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1, 
              },
              640: {
                slidesPerView: 2, 
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4, 
              },
              1536: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={10}
            pagination={false}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1500}
            className="mySwiper"
          >
            {loading ? (
              <div className="col-span-full">
                {" "}
                <Loading />
              </div>
            ) : (
              tips.map((tip, idx) => (
                <SwiperSlide>
                  <TipsCard key={tip.id} idx={idx} tip={tip} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WinterTips;
