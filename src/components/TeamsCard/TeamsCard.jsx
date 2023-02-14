import React from 'react';
import Teams__card from '../../assets/teamsCard-Img.png'
import Achievements1 from '../../assets/achievements1.png'
import Achievements2 from '../../assets/achievements2.png'
import Achievements3 from '../../assets/achievements3.png'
import Achievements4 from '../../assets/achievements4.png'
const TeamsCard = () => {
    return (
        <div className='teams__card'>
           <div className='teams__card-image'>
               <img src={Teams__card} alt=""/>
                <h3 className='teams__card-title'>PlayFair Display$$$</h3>
           </div>
            <div className="teams__card-info">
                <div className="teams__card-text">
                    <p className='teams__card-desc'>Рейтинг</p>
                    <p className='teams__card-number'>2674</p>
                </div>
                <div className="teams__card-text">
                    <p className='teams__card-desc'>Турниров</p>
                    <p className='teams__card-number'>43</p>
                </div>
                <div className="teams__card-text">
                    <p className='teams__card-desc'>Выиграно</p>
                    <p className='teams__card-number'>200 029 BS</p>
                </div>
                <div className="teams__card-text">
                    <p className='teams__card-desc'>Учасников</p>
                    <p className='teams__card-number'>9/15</p>
                </div>
            </div>
            <div className="teams__card-btns">
                    <span className="teams__card-like">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="3.5" fill="#6FFF57" fillOpacity="0.2" stroke="#6FFF57"/>
<path d="M29 15.0001L17 27.0001L11.5 21.5001L12.91 20.0901L17 24.1701L27.59 13.5901L29 15.0001Z" fill="#6FFF57"/>
</svg>
                    </span>
                <span className="teams__card-del">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="3.5" fill="#F13939" fillOpacity="0.4" stroke="#F13939"/>
<path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#F13939"/>
</svg>

                    </span>
            </div>
            <div className="teams__card-achievements">
                <img src={Achievements1} alt=""/>
                <img src={Achievements2} alt=""/>
                <img src={Achievements3} alt=""/>
                <img src={Achievements4} alt=""/>
            </div>
        </div>
    );
};

export default TeamsCard;