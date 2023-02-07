import React from 'react';
import Logo from '../../assets/StrimLogo.png'

const StrimCardBattle = () => {
    return (
        <div className='strim__right-battle'>
            <p className="strim__right-notif">Полуфинал Major 2021 Stockholm</p>
            <div className="strim__right-team">
                <img src={Logo} alt="" className="strim__right-logo"/>
                <p className="strim__right-name active">WEAK_Sincerely</p>
                <p className="strim__right-ball">1774</p>
            </div>

            <div className="strim__right-check">
                <span>15:00</span>
                3 : 2
            </div>

            <div className="strim__right-team">
                <p className="strim__right-ball">1774</p>
                <p className="strim__right-name">WEAK_Sincerely</p>
                <img src={Logo} alt="" className="strim__right-logo"/>
            </div>

        </div>
    );
};

export default StrimCardBattle;