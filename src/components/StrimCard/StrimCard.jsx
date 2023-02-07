import React from 'react';
import TeamLogo from '../../assets/StrimTeamLogo.png'
import TeamLogo1 from '../../assets/StrimTeamLogo@.png'
import TeamImg from '../../assets/StrimImg.png'

const StrimCard = () => {
    return (
        <div className='strim__card'>
            <img src={TeamImg} alt="" className="strim__card-img"/>
            <div className='strim__card-info'>
                <div className="strim__card-battle">
                    <div className="strim__card-team">
                        <img src={TeamLogo} alt="" className="strim__card-logo"/>
                        <p className="strim__card-name">ApacheLeader </p>
                    </div>
                    <p className="strim__card-name">VS</p>
                    <div className="strim__card-team">
                        <img src={TeamLogo1} alt="" className="strim__card-logo"/>
                        <p className="strim__card-name">DeJaVU</p>
                    </div>
                </div>
                <p className="strim__card-final">1/16 финала</p>
            </div>
        </div>
    );
};

export default StrimCard;