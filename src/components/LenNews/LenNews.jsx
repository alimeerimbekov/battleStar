import React from 'react';
import Csgo from '../../assets/lenSlideCsgo.webp'

const LenNews = () => {
    return (
        <div className='lenSlide__news-card'>
            <img src={Csgo} alt="" className="lenSlide__news-img"/>
             <h3 className="lenSlide__news-title">Турниры BattleStar</h3>
            <p className="lenSlide__news-desc">
                Профессиональные и любительские турниры с большими призовыми фондами
            </p>
        </div>
    );
};

export default LenNews;