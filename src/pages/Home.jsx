import React from 'react'
import About from './About'
import Room from './Room'
import Gallery from './Gallery'
import Blog from './Blog'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  return (
    <>
      <section>
        <div className="banner">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <img className="banner1 w-100" src="https://themewagon.github.io/keto/images/banner2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img className="banner1 w-100" src="https://themewagon.github.io/keto/images/banner1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide> <img className="banner1 w-100" src="https://themewagon.github.io/keto/images/banner3.jpg" alt="" /></SwiperSlide>

          </Swiper>

        </div>
      </section>
      <About />
      <Room />
      <Gallery />
      <Blog />
    </>
  )
}

export default Home
