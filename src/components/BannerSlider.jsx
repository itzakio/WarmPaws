// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import pic1 from "../assets/1.jpg"
import pic2 from "../assets/2.jpg"
import pic3 from "../assets/3.jpg"
import pic4 from "../assets/4.jpg"
import pic5 from "../assets/5.jpg"
import pic6 from "../assets/6.jpg"
import pic7 from "../assets/7.jpg"

const BannerSlider = () => {
  return (
    <div  className=" w-full overflow-hidden mx-auto lg:brightness-50">
        <Swiper
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination, Autoplay]}  
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
        loop={true} speed={1500} className="mySwiper">
        <SwiperSlide><img className="w-full" src={pic1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={pic7} alt="" /></SwiperSlide>
      </Swiper>
  
    </div>
  );
};

export default BannerSlider;
