import React from 'react';
import SlideImg from '../../../assets/slideImg.png'
import TeamCard from "../../../components/TeamCard/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slide = () => {
    return (
        <section className='slide'>
            <div className="container">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><div className="slide__card">
                        <img src={SlideImg} alt="" className='slide__img'/>
                        <div className="slide__info">
                            <h2 className="slide__title">
                                Major Stochholm 2021
                            </h2>
                            <p className="slide__date">
                                23 Окт - 7 Ноя
                            </p>
                            <p className="slide__teamReg">
                                36 команд зарегистрированы:
                            </p>
                            <div className="slide__teams">
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                            </div>
                            <div className="slide__btns">
                                <button className="slide__btn">Подать заявку</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="slide__card">
                        <img src={SlideImg} alt="" className='slide__img'/>
                        <div className="slide__info">
                            <h2 className="slide__title">
                                Major Stochholm 2021
                            </h2>
                            <p className="slide__date">
                                23 Окт - 7 Ноя
                            </p>
                            <p className="slide__teamReg">
                                36 команд зарегистрированы:
                            </p>
                            <div className="slide__teams">
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                            </div>
                            <div className="slide__btns">
                                <button className="slide__btn">Подать заявку</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="slide__card">
                        <img src={SlideImg} alt="" className='slide__img'/>
                        <div className="slide__info">
                            <h2 className="slide__title">
                                Major Stochholm 2021
                            </h2>
                            <p className="slide__date">
                                23 Окт - 7 Ноя
                            </p>
                            <p className="slide__teamReg">
                                36 команд зарегистрированы:
                            </p>
                            <div className="slide__teams">
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                                <TeamCard/>
                            </div>
                            <div className="slide__btns">
                                <button className="slide__btn">Подать заявку</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slide;