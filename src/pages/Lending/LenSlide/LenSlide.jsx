import React from 'react';
import LenSlideCard from "../../../components/LenSlideCard/LenSlideCard";
import {GoChevronLeft, GoChevronRight} from "react-icons/go"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import LenNews from "../../../components/LenNews/LenNews";

const LenSlide = () => {
    return (
        <section className='lenSlide'>
            <div className="container">
                <div className="lenSlide__cards">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><LenSlideCard/></SwiperSlide>
                        <SwiperSlide><LenSlideCard/></SwiperSlide>
                        <SwiperSlide><LenSlideCard/></SwiperSlide>
                        <SwiperSlide><LenSlideCard/></SwiperSlide>
                        <SwiperSlide><LenSlideCard/></SwiperSlide>
                        <SwiperSlide><LenSlideCard/></SwiperSlide>

                        {/*<span className="lenSlide__prev"><GoChevronLeft size={35}/></span>*/}
                        {/*<span className="lenSlide__next"><GoChevronRight size={35}/></span>*/}
                    </Swiper>
                </div>

                <div className="lenSlide__news">
                    <LenNews/>
                    <LenNews/>
                    <LenNews/>
                    <LenNews/>
                </div>

            </div>
        </section>
    );
};

export default LenSlide;