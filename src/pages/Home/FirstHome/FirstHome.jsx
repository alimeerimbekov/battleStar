import React from 'react';
import {GoChevronRight} from "react-icons/go";
import HomeCard from "../../../components/HomeCard/HomeCard";


const FirstHome = () => {
    return (
        <section className='home'>
            <div className="container">
                <h1 className="home__title">
                    <span className='home__title-yellow'>BattleStar</span>
                    <p className='home__title-text'>Новости</p>
                </h1>

                <div className="home__cards">
                    <span className="home__cards-arrow">
                        <GoChevronRight size={60}/>
                    </span>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>
            </div>
        </section>
    );
};

export default FirstHome;