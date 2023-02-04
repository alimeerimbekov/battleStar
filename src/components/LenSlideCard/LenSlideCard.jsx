import React from 'react';
import Img from '../../assets/LenSlideImg.png'

const LenSlideCard = () => {
    return (
        <div className='lenSlide__card'>
            <img src={Img} alt="" className="lenSlide__img"/>
            <div className="lenSlide__desc">
                <span className="lenSlide__trans">Онлайн</span>
                <p className="lenSlide__name">NAC Sport Championship 2020</p>
            </div>

        </div>
    );
};

export default LenSlideCard;