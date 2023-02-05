import React from 'react';
import Logo from '../../assets/logo/teamLogo.png'
import Pris from '../../assets/logo/pris.png'
import Pris2 from '../../assets/logo/pris2.png'

const StarCard = () => {
    return (
        <div className='star__card'>
            <img src={Logo} alt="" className="star__card-logo"/>
            <h3 className="star__card-name">PlayFair Display$$$</h3>
            <div className="star__card-stat">
                <p className="star__card-stat-text">Рейтинг</p>
                <p className="star__card-stat-num">2674</p>
            </div>
            <div className="star__card-stat">
                <p className="star__card-stat-text">Турниров</p>
                <p className="star__card-stat-num">27</p>
            </div>
            <div className="star__card-stat">
                <p className="star__card-stat-text">Выиграно</p>
                <p className="star__card-stat-num">200 029 BS</p>
            </div>
            <div className="star__card-stat">
                <p className="star__card-stat-text">Учасников</p>
                <p className="star__card-stat-num">9/15</p>
            </div>

            <div className="star__card-pris">
                <img src={Pris} alt='' className="star__card-pris-logo"/>
                <img src={Pris} alt='' className="star__card-pris-logo"/>
                <img src={Pris2} alt='' className="star__card-pris-logo"/>
                <img src={Pris2} alt='' className="star__card-pris-logo"/>
            </div>
        </div>
    );
};

export default StarCard;