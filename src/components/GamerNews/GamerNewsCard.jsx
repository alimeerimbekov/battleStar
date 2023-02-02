import React from 'react';
import {AiTwotoneLike} from 'react-icons/ai'
import {TfiEye} from 'react-icons/tfi'
import Game from '../../assets/gameImg.png'


const GamerNewsCard = () => {
    return (
        <div className='gamerNews__card'>
            <img src={Game} alt="" className="gamerNews__img"/>
            <div className="gamerNews__info">
                <h2 className="gamerNews__title">
                    С другой стороны дальнейшее развитие различных форм
                </h2>
                <p className="gamerNews__desc">
                    Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.
                </p>

                <div className="gamerNews__date">
                    <p className="gamerNews__date-text">
                        17 Окт 2020
                    </p>

                    <div className="gamerNews__date-like">
                        <div>
                            <span  className='gamerNews__date-icon'><AiTwotoneLike size={20}/></span>
                            <p  className='gamerNews__date-desc'>345</p>
                        </div>

                        <div>
                            <span  className='gamerNews__date-icon'><TfiEye size={20}/></span>
                            <p  className='gamerNews__date-desc'>1380</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamerNewsCard;