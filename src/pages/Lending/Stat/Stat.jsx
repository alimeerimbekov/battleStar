import React from 'react';
import Bg from '../../../assets/statBg.png'

const Stat = () => {
    return (
        <section className='stat'>
            <img src={Bg} alt="" className="stat__bg"/>
            <div className="container">
                <div className="stat__row">
                    <div className="stat__box">
                        <div className="stat__gamer">
                            <span className="stat__gamer-num">20 000</span>
                            <span className="stat__gamer-text">Игроков</span>
                        </div>
                        <div className="stat__gamer">
                            <span className="stat__gamer-num">13</span>
                            <span className="stat__gamer-text">Турниров</span>
                        </div>
                        <div className="stat__gamer">
                            <span className="stat__gamer-num">5 172</span>
                            <span className="stat__gamer-text">Матчей сыграно</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stat;