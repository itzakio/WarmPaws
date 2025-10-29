import useFetchData from "../hooks/useFetchData";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CustomerReviews = () => {
  const { data: reviews, loading, error } = useFetchData("/reviews.json");

  return (
    <section className="py-16 bg-orange-50">
      <div  className="text-center">
        <h2 data-aos="fade-up"  className=" signika-font headline">What Our 
          <span  className="text-primary signika-font"> Customers</span>   Say
        </h2>
        <p data-aos="fade-up" data-aos-delay={100} className="text-sub mt-2">
          Trusted by pet lovers all over the city.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay={200} className="">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={0}
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
            reviews.map((review, idx) => (
              <SwiperSlide className="py-12">
                <ReviewCard key={review.id} idx={idx} review={review} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;
