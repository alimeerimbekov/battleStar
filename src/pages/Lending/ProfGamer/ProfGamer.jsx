import React from 'react';
import User from '../../../assets/userLogo.png'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";

const ProfGamer = () => {
    return (
        <section className='profGamer'>
            <div className="container">
                <div className="profGamer__top">
                    <h2 className="profGamer__title">Профессиональные игроки</h2>
                    <div className="profGamer__desc">
                        Повседневная практика показывает, что сложившаяся структура <br/> организации требуют
                        определения и уточнения системы обучения кадров, <br/> соответствует насущным потребностям.
                    </div>
                    <div className="profGamer__users">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="profGamer__user">
                                <img src={User} alt="" className="profGamer__user-img"/>
                                <p className="profGamer__user-name">EDWARD</p>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProfGamer;