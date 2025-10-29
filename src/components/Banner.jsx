import React from 'react';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
            <BannerSlider/>
            <div className='lg:absolute w-3/5 lg:gap-4 lg:ml-20 top-0 left-0 h-full flex flex-col justify-center lg:text-white p-4 '>
                <div className='relative'>
                    <h3 data-aos="fade-up"  className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-bold signika-font text-white">WarmPaws</h3>
                    <h3 data-aos="fade-up"  className="absolute bottom-0.5 left-1 text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-bold signika-font text-primary">WarmPaws</h3>
                </div>
                <p data-aos="fade-up" data-aos-delay="200" className=' md:text-xl lg:text-3xl xl:text-5xl lg:leading-10 xl:leading-16 font-semibold'>Trusted care for your furry, feathered, or finned friends. Because they’re family.</p>
                <Link data-aos="fade-up" data-aos-delay="400" to="/services" className=" text-xl w-fit font-semibold mybtn mt-4">Our Services</Link>
            </div>
           </div>
        </div>
    );
};

export default Banner;