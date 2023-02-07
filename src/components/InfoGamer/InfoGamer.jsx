import React, { useRef, useState } from 'react';
import User from '../../assets/gamerInfo.avif'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const InfoGamer = () => {
    return (
        <section className='infoGamer'>
         <div className="infoGamer__cards">
             <Swiper
                 slidesPerView={"auto"}
                 centeredSlides={true}
                 spaceBetween={0}
                 pagination={{
                     clickable: true,
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
             >
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>
                 <SwiperSlide> <div className="infoGamer__card">
                     <div className="infoGamer__card-left">
                         <img src={User} alt="" className="infoGamer__card-img"/>
                     </div>
                     <div className="infoGamer__card-right">
                         <p className="infoGamer__card-name">EDWARD</p>
                         <span className="infoGamer__card-surname">Ioann Sukhariev</span>
                         <p className="infoGamer__card-team">Team: NAVI</p>
                         <span className="infoGamer__card-desc">“Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий.”</span>
                     </div>
                 </div></SwiperSlide>

             </Swiper>


         </div>
        </section>
    );
};

export default InfoGamer;