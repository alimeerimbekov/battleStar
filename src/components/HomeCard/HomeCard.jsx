import React from 'react';
import {TfiEye} from 'react-icons/tfi'
import IMAGE from '../../assets/homeCard.png'
import User from '../../assets/userLogo.png'

const HomeCard = () => {
    return (
        <div className='home__card'>
            <img src={IMAGE} alt="" className="home__card-img"/>
            <div className="home__card-box">
                <p className="home__card-title">Главные турниры октября</p>
                <p className="home__card-desc">FURIA представила помощника тренера. Отныне tacitus...</p>
                <div className="home__card-info">
                    <div className="home__card-user">
                        <img src={User} alt="" className="home__card-user-img"/>
                        <p className="home__card-user-name">Максим Рихтер</p>
                        <p className="home__card-user-date">19 Окт, 2020</p>
                    </div>
                    <div className="home__card-views">
                        <span className="home__card-views-icon"><TfiEye size={18}/></span>
                        <p className="home__card-views-num">123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;