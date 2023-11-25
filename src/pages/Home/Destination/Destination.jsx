import { useState } from "react";

import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import image1 from '../../../assets/destinationImage/image.png' ;
import image2 from '../../../assets/destinationImage/image1.png' ;
import image3 from '../../../assets/destinationImage/image2.png' ;

const Destination = () => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="w-[90%] mx-auto">
    <h2 className="text-2xl lg:text-3xl text-center lg:text-left">Our Destinations</h2>
      <Swiper
        onSwiper={setSwiperRef}
        
        centeredSlides={true}
        spaceBetween={10}
        pagination={{ clickable: true }}
      
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
            <figure>
              <img
                src={image1}
                alt="image1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harvard University</h2>
              
              <div className="flex justify-between items-center">
                <h1 className="font-sm">Cambridge, Massachusetts, UK</h1>
                <button className="btn bg-[#F2F2F2] rounded-full">...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact  w-[320px] bg-base-100 shadow-xl">
            <figure>
              <img
                src={image2}
                alt="image2"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harvard University</h2>
              
              <div className="flex justify-between items-center">
                <h1 className="font-sm">Cambridge, Massachusetts, UK</h1>
                <button className="btn bg-[#F2F2F2] rounded-full">...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
            <figure>
              <img
                src={image3}
                alt="image3"
                
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harvard University</h2>
              
              <div className="flex justify-between items-center">
                <h1 className="font-sm">Cambridge, Massachusetts, UK</h1>
                <button className="btn bg-[#F2F2F2] rounded-full">...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
            <figure>
              <img
                src={image1}
                alt="image1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harvard University</h2>
              
              <div className="flex justify-between items-center">
                <h1 className="font-sm">Cambridge, Massachusetts, UK</h1>
                <button className="btn bg-[#F2F2F2] rounded-full">...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
            <figure>
              <img
                src={image2}
                alt="image2"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harvard University</h2>
              
              <div className="flex justify-between items-center">
                <h1 className="font-sm">Cambridge, Massachusetts, UK</h1>
                <button className="btn bg-[#F2F2F2] rounded-full">...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Destination;
